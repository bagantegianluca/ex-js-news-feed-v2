// Create the objects array
const posts = [
    {
        id: 1,
        title: 'Scoperta di una nuova specie di papera di gomma',
        content: 'Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima.',
        tags: ['geo', 'tech', 'PROVA'],
        author: 'Diana Rossi',
        published: '2023-02-11',
        urlImg: './img/rubber-duck.jpg'
    },
    {
        id: 2,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        tags: ['viaggi', 'geo'],
        author: 'Fabio Mari',
        published: '2023-03-14',
        urlImg: './img/deep-sea.jpg'
    },
    {
        id: 3,
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.',
        tags: ['cucina'],
        author: 'Marta Bianchi',
        published: '2023-04-20',
        urlImg: './img/kitchen-food.jpg'
    },
    {
        id: 4,
        title: 'Arte moderna: oltre i confini convenzionali',
        content: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
        tags: ['arte', 'tech', 'prova'],
        author: 'Gabriele Neri',
        published: '2023-05-29',
        urlImg: './img/modern-art.jpg'
    }
];

// Create an array with all distinct tags
const distinctTags = [...new Set(posts.flatMap(post => post.tags.map(tag => tag.toLowerCase())))];

// Create the select options
selectOptionsGenerator(distinctTags);

// Select the main element
const mainEl = document.querySelector('main');

let filteredPosts = posts;

// Generate all posts
postsGenerator(filteredPosts);


//#region FUNCTIONS

/**
 * ### generatePosts
 * Display all posts contained in an array
 * @param {string} arr The array contains the posts to be displayed
 */
function postsGenerator(arr) {
    // Generate single post
    arr.forEach(element => {

        const sectionElMarkup = `
    <section class="p-3 my-3">

        <div class="title d-flex justify-content-between">
            <div class="title-left">

                <h2>${element.title}</h2>
                <h5 class="mb-0">Pubblicato da ${element.author}</h5>
                <h7 class="mb-0">in data ${element.published.slice(8, 10)}/${element.published.slice(5, 7)}/${element.published.slice(0, 4)}</h7>

            </div>

            <div class="title-right">
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </div>

        <p class="my-3">${element.content}</p>

        <img src="${element.urlImg.toLowerCase()}" alt="${element.urlImg.slice(6, element.urlImg.indexOf('.jpg')).toLowerCase()}" class="w-100 object-fit-cover mb-3">

        <div class="tags d-flex text-light gap-1">
            <div class="geo py-1 px-2 rounded-2">geo</div>
            <div class="tech py-1 px-2 rounded-2">tech</div>
        </div>

    </section>
    <!-- Section post ${element.id} -->
    `

        mainEl.innerHTML += sectionElMarkup;
    })
}

/**
 * ### selectOptionsGenerator
 * Create all elements of the array as option in the first select
 * @param {string} arr The array with elements will become options of the select
 */
function selectOptionsGenerator(arr) {

    // Select the select element
    const selectEl = document.querySelector('select');

    // Create an array with different tags

    arr.unshift('all');

    arr.forEach(tag => {

        const optionMarkup = `<option${tag === 'all' ? ' selected' : ''}>${tag}</option>`;
        selectEl.innerHTML += optionMarkup;

    });
};

//#endregion