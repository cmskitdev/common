/**
 * Utility functions for Notion blocks.
 */

import type {
  Heading1,
  Heading2,
  Heading3,
  NotionColor,
  RichText,
  URLType,
} from "./types.js";

/**
 * Converts snake_case color names to kebab-case for CSS classes.
 */
export function snakeToKebab(str: string): string {
  return str.replace(/_/g, "-");
}

/**
 * Builds a heading ID from rich text content.
 */
export function buildHeadingId(
  heading: Heading1 | Heading2 | Heading3
): string {
  return heading.RichTexts.map((richText: RichText) => richText.PlainText)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Determines the URL type for embed handling.
 */
export function getURLType(url: URL): URLType {
  const hostname = url.hostname.toLowerCase();

  if (hostname.includes("twitter.com") || hostname.includes("x.com")) {
    return "twitter";
  }
  if (hostname.includes("tiktok.com")) {
    return "tiktok";
  }
  if (hostname.includes("instagram.com")) {
    return "instagram";
  }
  if (hostname.includes("pinterest.com")) {
    return "pinterest";
  }
  if (hostname.includes("codepen.io")) {
    return "codepen";
  }
  if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
    return "youtube";
  }
  if (hostname.includes("amazon.com") || hostname.includes("amzn.to")) {
    return "amazon";
  }

  return "unknown";
}

/**
 * Checks if URL is a Twitter/X URL.
 */
export function isTweetURL(url: URL): boolean {
  return getURLType(url) === "twitter";
}

/**
 * Checks if URL is a TikTok URL.
 */
export function isTikTokURL(url: URL): boolean {
  return getURLType(url) === "tiktok";
}

/**
 * Checks if URL is an Instagram URL.
 */
export function isInstagramURL(url: URL): boolean {
  return getURLType(url) === "instagram";
}

/**
 * Checks if URL is a Pinterest URL.
 */
export function isPinterestURL(url: URL): boolean {
  return getURLType(url) === "pinterest";
}

/**
 * Checks if URL is a CodePen URL.
 */
export function isCodePenURL(url: URL): boolean {
  return getURLType(url) === "codepen";
}

/**
 * Checks if URL is a YouTube URL.
 */
export function isYouTubeURL(url: URL): boolean {
  return getURLType(url) === "youtube";
}

/**
 * Checks if URL is an Amazon URL.
 */
export function isAmazonURL(url: URL): boolean {
  return getURLType(url) === "amazon";
}

/**
 * Parses YouTube video ID from URL.
 */
export function parseYouTubeVideoId(url: URL): string | null {
  const hostname = url.hostname.toLowerCase();

  if (hostname.includes("youtube.com")) {
    return url.searchParams.get("v");
  }

  if (hostname.includes("youtu.be")) {
    return url.pathname.slice(1);
  }

  return null;
}

/**
 * Generates file path for Notion files.
 */
export function filePath(url: URL): string {
  // This would typically transform Notion file URLs to your CDN or file serving endpoint
  return url.toString();
}

/**
 * Gets post link from slug.
 */
export function getPostLink(slug: string): string {
  return `/${slug}`;
}

/**
 * Validates and normalizes color values.
 */
export function normalizeColor(color: string): NotionColor {
  const validColors: NotionColor[] = [
    "default",
    "gray",
    "brown",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "red",
    "gray_background",
    "brown_background",
    "orange_background",
    "yellow_background",
    "green_background",
    "blue_background",
    "purple_background",
    "pink_background",
    "red_background",
  ];

  return validColors.includes(color as NotionColor)
    ? (color as NotionColor)
    : "default";
}

/**
 * Escapes HTML content for safe rendering.
 */
export function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Splits content by newlines and preserves line breaks.
 */
export function splitByNewlines(content: string): string[] {
  return content.split("\n");
}
