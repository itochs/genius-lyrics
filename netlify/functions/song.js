export default async function () {
  const html = `
    <div id='rg_embed_link_3039923' class='rg_embed_link' data-song-id='3039923'>Read <a href='https://genius.com/Kendrick-lamar-humble-lyrics'>“HUMBLE.” by Kendrick Lamar</a> on Genius</div> <script crossorigin src='//genius.com/songs/3039923/embed.js'></script>`;
  return new Response(html, {
    headers: {
      "Content-type": "text/html",
    },
  });
}
