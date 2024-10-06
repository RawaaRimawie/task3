
const htmlInput = document.getElementById('htmlInput');
const cssInput = document.getElementById('cssInput');
const jsInput = document.getElementById('jsInput');
const outputFrame = document.getElementById('outputFrame');

// Function to update the iframe content
function updateIframe() {
    const html = htmlInput.value;
    const css = `<style>${cssInput.value}</style>`;
    const js = `<script>${jsInput.value}</script>`;

    const iframeDocument = outputFrame.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(`
        ${css}
        ${html}
        ${js}
    `);
    iframeDocument.close();
}

// Event listeners to update iframe on input change
htmlInput.addEventListener('input', updateIframe);
cssInput.addEventListener('input', updateIframe);
jsInput.addEventListener('input', updateIframe);
