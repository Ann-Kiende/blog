// BLOG PAGE
const blogForm = document.getElementById('blog-form')
if(blogForm) {
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
}


// CONTACT PAGE
const contactForm = document.getElementById('contact-form')
if(contactForm) {
    const nameForm = document.getElementById('name')
    const emailForm = document.getElementById('email')
    const messageForm = document.getElementById('message')

    const nameError = document.getElementById('name-error')
    const emailError = document.getElementById('email-error')
    const messageError = document.getElementById('message-error')
    const successMessage = document.getElementById('success-message')


    contactForm.addEventListener('submit', (event) => {
        event.preventDefault() //Prevent form from submitting and page loading

        let hasError = false;

        //Clear previous error messages
        nameError.textContent = ''
        emailError.textContent = ''
        messageError.textContent = ''
        successMessage.style.display = 'none'
        successMessage.textContent = ''

        if(nameForm.value.trim() == '') {
            nameError.textContent = 'Name missing'
            hasError = true;
        } else if(emailForm.value.trim() == '') {
            emailError.textContent = 'Email missing'
            hasError = true;
        }else if(messageForm.value.trim() == '') {
            messageError.textContent = 'Message missing'
            hasError = true;
        }else {
            successMessage.textContent = 'Message Sent Successfully'
            successMessage.style.display = 'block'
            contactForm.reset()
            
            setTimeout(() => {
                successMessage.classList.remove('visible')
            }, 1000)
        }
    })
}
