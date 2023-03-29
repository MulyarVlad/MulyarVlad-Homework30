const smilesContainer = document.querySelector('.smiles');
let smileyData = [
  { id: 'smile1', symbol: '😀', count: 0 },
  { id: 'smile2', symbol: '😊', count: 0 },
  { id: 'smile3', symbol: '😍', count: 0 },
  { id: 'smile4', symbol: '🤔', count: 0 },
  { id: 'smile5', symbol: '😭', count: 0 }
];

// Render smileys and click counts
function renderSmileys() {
  let smilesHtml = '';
  for (let i = 0; i < smileyData.length; i++) {
    const smile = smileyData[i];
    smilesHtml += `
      <div id="${smile.id}" class="smile">${smile.symbol}
        <div class="click-count">Clicked: ${smile.count}</div>
      </div>
    `;
  }
  smilesContainer.innerHTML = smilesHtml;
}

// Handle smiley click events
function handleSmileyClick(event) {
  const smileyEl = event.target.closest('.smile');
  if (!smileyEl) return;

  const smileyId = smileyEl.id;
  const smileyDataIndex = smileyData.findIndex(s => s.id === smileyId);

  if (smileyDataIndex !== -1) {
    smileyData[smileyDataIndex].count++;
    renderSmileys();
  }
}

smilesContainer.addEventListener('click', handleSmileyClick);

renderSmileys();

  


  
