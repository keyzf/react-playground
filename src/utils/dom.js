
export function createInlinePreviewContainer() {
  const container = document.createElement('div');
  container.className = 'editor-rp-preview-container';
  container.style.all = 'initial';
  container.style.position = 'relative';
  container.style.display = 'block';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  container.style.padding = '12px 30px';
  container.style.borderRadius = '4px';
  container.style.color = '#fff';
  return container;
}

export function createInlinePreviewMountDom() {
  const mounNode = document.createElement('div');
  mounNode.className = 'editor-rp-preview-mount';
  mounNode.style.position = 'relative';
  mounNode.style.display = 'block';
  return mounNode;
}


export function createIframe(onIframeLoad) {
  var iframe = document.createElement('iframe');
  iframe.class = 'react-playground-preview-iframe';
  iframe.src = 'about:blank';
  iframe.style.border = 'none';
  iframe.style.zIndex = 2147483647;
  iframe.style.margin = 0;
  iframe.style.padding = 0;
  iframe.style.width = '100%';
  iframe.onload = onIframeLoad;
  return iframe;
}


export function addPreviewDiv(iframe) {
  var outerDiv = iframe.contentDocument.createElement('div');
  outerDiv.class = 'react-playground-preview-box';
  outerDiv.style.width = '100%';
  outerDiv.style.height = '100%';
  outerDiv.style.boxSizing = 'border-box';
  outerDiv.style.position = 'relative';
  outerDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  outerDiv.style.padding = '12px 30px';
  outerDiv.style.borderRadius = '4px';
  outerDiv.style.color = '#fff';


  var div = iframe.contentDocument.createElement('div');
  div.style.position = 'relative';
  div.style.display = 'block';

  outerDiv.appendChild(div);
  iframe.contentDocument.body.appendChild(outerDiv);
  return div;
}