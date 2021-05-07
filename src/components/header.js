const Header = (title, date, temp) => {
  let headerDiv = document.createElement('div')
  let dateSpan = document.createElement('span')
  let titleHead = document.createElement('h1')
  let tempSpan = document.createElement('span')


  headerDiv.appendChild(dateSpan)
  headerDiv.appendChild(titleHead)
  headerDiv.appendChild(tempSpan)

  headerDiv.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')

  
  dateSpan.textContent = (date)
  titleHead.textContent = (title)
  tempSpan.textContent = (temp + '\xB0')

  return headerDiv
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  let newHead = Header("Lamda Times", "January 6, 2021", 26)
  console.log(newHead)
  document.querySelector(selector).appendChild(newHead)
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
