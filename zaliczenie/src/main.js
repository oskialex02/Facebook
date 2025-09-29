import './styles/main.scss';

// prosty toggle "Lubię to"
const likeBtn = document.getElementById('likeBtn');
if (likeBtn) {
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('primary');
    likeBtn.textContent = likeBtn.classList.contains('primary') ? 'Lubisz to' : 'Lubię to';
  });
}

// pseudo-tabs
const tabs = document.querySelectorAll('.tab');
const panels = {
  posts: document.getElementById('tab-posts'),
  info: document.getElementById('tab-info'),
  mentions: document.getElementById('tab-mentions'),
  opinie: document.getElementById('tab-opinie'),
};

tabs.forEach((t) => {
  t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');

    const key = t.dataset.tab;
    Object.values(panels).forEach(p => p?.classList.add('hidden'));
    if (key && panels[key]) panels[key].classList.remove('hidden');
  });
});