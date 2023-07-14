console.log("afficher");
const postsContainer = document.querySelector('.posts');
console.log(postsContainer);


const post= {
    titre:'SEO, les bonnes pratiques',
    Hashtag :'#SEO',
    extrait : 'Lorem ipsum dolor sit amet consecteteur adipicing elit. Quisqual voluptatum.'

}
console.log(post);
// pour recuperer valeur Titre prendre nom objet et y associer propriété
const t = post.titre;
console.log(t); 

const posts = [
    {
        titre:"SEO, les bonnes pratiques",
        hashtag:"#seo",
        extrait:"Lorem ipsum dolor sit amet consecteteur adipicing elit. Quisqual voluptatum."
    },
    {
        titre:'bien débuter en référencement payant',
        hashtag:'#référencement',
        extrait: "Lorem ipsum dolor sit amet consecteteur adipicing elit. Quisqual voluptatum."
    },
    {
        titre: 'content marketing, les bons arguments',
        hashtag:'#contentmarketing',
        extrait:"Lorem ipsum dolor sit amet consecteteur adipicing elit. Quisqual voluptatum."
    }
];
console.log(posts);

posts.forEach((item)=>{
    console.log(item);
    // le $ permet de recuper les éléments
    const article = `<div class="post-titre">${item.titre}</div>
    <div class="post-extrait">${item.extrait}</div>
    <div class="post-hashtag">${item.hashtag}</div>`;
    console.log(article);
    // le + est important
    postsContainer.innerHTML += article;
})