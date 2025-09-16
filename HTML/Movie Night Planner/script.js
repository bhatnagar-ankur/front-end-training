// Base class
class MediaItem {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    getCardHTML() {
        return `
      <div class="movie-card" data-id="${this.id}">
        <div class="card-content">
          <h2>${this.escapeHTML(this.title)}</h2>
        </div>
      </div>`;
    }
    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Subclass Movie
class Movie extends MediaItem {
    constructor(id, title, director, rating) {
        super(id, title);
        this.director = director;
        this.rating = rating;
    }
    getCardHTML() {
        return `
      <div class="movie-card" data-id="${this.id}">
        <div class="card-content">
          <h2>${this.escapeHTML(this.title)}</h2>
          <p>Director: ${this.escapeHTML(this.director)}</p>
          <p class="rating">Rating: ${this.rating.toFixed(1)} / 10</p>
          <button class="delete-btn">Delete</button>
        </div>
      </div>`;
    }
}

// Application
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movie-form');
    const planner = document.getElementById('planner');
    const minRatingInput = document.getElementById('min-rating');
    const ratingValue = document.getElementById('rating-value');

    let watchlist = loadWatchlist();  // Load from Local Storage

    // Add movie
    form.addEventListener('submit', e => {
        e.preventDefault();
        const title = document.getElementById('title').value.trim();
        const director = document.getElementById('director').value.trim();
        const rating = parseFloat(document.getElementById('rating').value);
        if (!title || !director || isNaN(rating)) return;

        const id = Date.now();
        watchlist.push(new Movie(id, title, director, rating));
        saveWatchlist();               // Save after adding
        form.reset();
        renderWatchlist(watchlist);
    });

    // Filter by rating
    minRatingInput.addEventListener('input', () => {
        const min = parseFloat(minRatingInput.value);
        ratingValue.textContent = min.toFixed(1);
        const filtered = watchlist.filter(m => m.rating >= min);
        renderWatchlist(filtered);
    });

    // Render function with delete binding
    function renderWatchlist(list) {
        planner.innerHTML = list.map(m => m.getCardHTML()).join('');
        // Attach delete handlers
        planner.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const card = btn.closest('.movie-card');
                const id = Number(card.dataset.id);
                watchlist = watchlist.filter(m => m.id !== id);
                saveWatchlist();
                const min = parseFloat(minRatingInput.value);
                const toRender = watchlist.filter(m => m.rating >= min);
                renderWatchlist(toRender);
            });
        });
    }

    // Save watchlist to Local Storage
    function saveWatchlist() {
        const raw = watchlist.map(m => ({
            id: m.id,
            title: m.title,
            director: m.director,
            rating: m.rating
        }));
        localStorage.setItem('movieWatchlist', JSON.stringify(raw));
    }

    // Load watchlist from Local Storage
    function loadWatchlist() {
        const data = JSON.parse(localStorage.getItem('movieWatchlist') || '[]');
        return data.map(item => new Movie(item.id, item.title, item.director, item.rating));
    }

    // Initial render
    renderWatchlist(watchlist);
});
