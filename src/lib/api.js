const API_BASE = 'https://news-api-v2.vercel.app/api';

async function getJson(path) {
  const res = await fetch(`${API_BASE}${path}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`API request failed: ${path} (${res.status})`);
  }

  const payload = await res.json();

  if (payload.success === false) {
    throw new Error(payload.error?.message ?? `API error: ${path}`);
  }

  return payload;
}

export async function getSections() {
  const payload = await getJson('/news/sections');
  return payload.data ?? [];
}

export async function getLatestNews() {
  const payload = await getJson('/news');
  return payload.data ?? [];
}

export async function getMostRead() {
  const payload = await getJson('/news/most-read');
  return payload.data ?? [];
}

export async function getCategories() {
  const payload = await getJson('/categories');
  return (payload.data ?? []).filter((category) => category.scrapable);
}

export async function getCategoryNews(slug) {
  const payload = await getJson(`/category/${slug}`);
  return {
    title: payload.title,
    articles: payload.data ?? [],
  };
}

export async function getArticle(id) {
  const payload = await getJson(`/article/${id}`);
  return payload.data ?? null;
}

export function formatBengaliDate(value, options = {}) {
  if (!value) return '';

  return new Date(value).toLocaleString('bn-BD', {
    dateStyle: 'long',
    timeStyle: 'short',
    ...options,
  });
}