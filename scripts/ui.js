const blogForm = document.getElementById('contact-form')
const blogAuthor = document.getElementById('blog-author')
const blogTitle = document.getElementById('blog-title')
const blogContent = document.getElementById('blog-content')

const authorError = document.getElementById('author-error')
const titleError = document.getElementById('title-error')
const contentError = document.getElementById('content-error')
const successMessage = document.getElementById('success-message')

blogForm.addEventListener('submit', (event) => {
    event.preventDefault() //Prevent form from submitting and page loading

    let hasError = false
    
    //Clear previous error messages
    authorError.textContent = ''
    titleError.textContent = ''
    contentError.textContent = ''
    successMessage.style.display = 'none'
    successMessage.textContent = ''

    if(blogAuthor.value.trim() === '') {
       authorError.textContent = 'Author name is empty!'
       hasError = true
    } else
    if(blogTitle.value.trim() === '') {
        titleError.textContent = 'Blog title is empty!'
        hasError = true
    } else
    if(blogContent.value.trim() === '') {
        contentError.textContent = 'Blog Content is empty!'
        hasError = true
    } else {
        successMessage.textContent = 'Blog Uploaded Successfully'
        successMessage.style.display = 'block'
        blogForm.reset()

        setTimeout(() => {
            successMessage.classList.remove('visible')
        }, 1000)
    }
})
