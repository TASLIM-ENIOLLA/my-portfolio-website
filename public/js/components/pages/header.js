document.querySelectorAll('.page-links').forEach(
    eachElement => eachElement.addEventListener(
        'click',
        (event) => {
            event.preventDefault()
            const {target: {hash}} = event

            if(document.querySelector(hash)){
                document.querySelector(hash).scrollIntoView({behavior: 'smooth'})
            }
        }
    )
)
