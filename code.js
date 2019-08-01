figma.showUI(__html__);
figma.loadFontAsync({ family: "Roboto", style: "Regular" });
figma.ui.onmessage = msg => {
    if (msg.type === 'create-svg') {
        const nodes = [];
        const svg = figma.createNodeFromSvg(msg.svg);
        svg.x = figma.viewport.center.x;
        svg.y = figma.viewport.center.y;
        figma.currentPage.appendChild(svg);
        nodes.push(svg);
        figma.currentPage.selection = nodes;
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
