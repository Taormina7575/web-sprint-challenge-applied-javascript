import axios from "axios"

const Card = (article) => {
  let cardWrap = document.createElement('div')
  let headDiv = document.createElement('div')
  let authorDiv = document.createElement('div')
  let picWrap = document.createElement('div')
  let imgAuthor = document.createElement('img')
  let authorSpan = document.createElement('span')

  cardWrap.classList.add('card')
  headDiv.classList.add('headline')
  authorDiv.classList.add('author')
  picWrap.classList.add('img-container')

  cardWrap.appendChild(headDiv)
  cardWrap.appendChild(authorDiv)
  authorDiv.appendChild(picWrap)
  picWrap.appendChild(imgAuthor)
  authorDiv.appendChild(authorSpan)

  headDiv.textContent = (article.headline)
  imgAuthor.src = (article.authorPhoto)
  authorSpan.textContent = (article.authorName)

  cardWrap.addEventListener(('click'), e => {
    console.log(article.headline)
  })
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardWrap
}

const cardAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/articles')
      .then((articleData) => {
        articleData.data.articles.javascript.forEach(articleNew => {
          let newCard = Card(articleNew);
          document.querySelector(selector).appendChild(newCard)
        });

        articleData.data.articles.bootstrap.forEach(articleNew => {
          let newCard = Card(articleNew);
          document.querySelector(selector).appendChild(newCard)
        });

        articleData.data.articles.technology.forEach(articleNew => {
          let newCard = Card(articleNew);
          document.querySelector(selector).appendChild(newCard)
        });

        articleData.data.articles.jquery.forEach(articleNew => {
          let newCard = Card(articleNew);
          document.querySelector(selector).appendChild(newCard)
        });

        articleData.data.articles.node.forEach(articleNew => {
          let newCard = Card(articleNew);
          document.querySelector(selector).appendChild(newCard)
        });
      })
      .catch((err) => {
        console.log(err)
      })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
