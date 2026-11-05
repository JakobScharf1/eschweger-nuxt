<template>
    <div class="iframe-wrap">
        <iframe
            src="https://veranstaltungen.wannefredder.de"
            title="Veranstaltungen Wannefredder"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            referrerpolicy="no-referrer"
            frameborder="0"
        ></iframe>
        <noscript>
            <p>Die Veranstaltungen sind <a href="https://veranstaltungen.wannefredder.de" target="_blank" rel="noopener noreferrer">hier</a> verfügbar.</p>
        </noscript>
    </div>
</template>

<style scoped>
.iframe-wrap {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.iframe-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>