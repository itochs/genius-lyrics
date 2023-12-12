import { useEffect, useState } from "react";

const TOKEN =
  "8cnhRTs-VGVNYkGIm82bVO_X-X78HGaOydsI2AFMci8r8TeH448Ph0NhjtNqn0fn";

async function fetchSong(songId) {
  const response = await fetch(`/api/songs/${songId}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return response.json();
}

async function fetchPage(url) {
  const originalUrl = new URL(url);
  const response = await fetch(`/html/${originalUrl.pathname}`);
  return response.text();
}

function getLines(node, result) {
  if (node.nodeType === node.TEXT_NODE) {
    result.push(node.textContent);
  }
  if (node.nodeType === node.ELEMENT_NODE && node.tagName === "BR") {
    result.push("\n");
  }
  for (const child of node.childNodes) {
    getLines(child, result);
  }
}

async function fetchLyrics(songId) {
  const data = await fetchSong(songId);
  const html = await fetchPage(data.response.song.url);
  const doc = new DOMParser().parseFromString(html, "text/html");
  const lines = [];
  for (const container of doc.querySelectorAll(
    'div[data-lyrics-container="true"]'
  )) {
    getLines(container, lines);
    lines.push("\n");
  }
  return lines.join("");
}

export default function App() {
  const [lyrics, setLyrics] = useState();
  useEffect(() => {
    (async () => {
      const lyrics = await fetchLyrics(378195);
      setLyrics(lyrics);
    })();
  }, []);

  return <pre>{lyrics}</pre>;
}
