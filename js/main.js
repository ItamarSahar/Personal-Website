console.log('Starting up')

function onInit() {
	renderProjects()
}

function renderProjects() {
	const projects = getProjects()
	const strHTML = projects.map(
		(project) => `<div class="col-md-4 col-sm-6 portfolio-item">
    <a
        class="portfolio-link"
        data-toggle="modal"
        href="#portfolioModal1"
        onclick="onOpenModal(${project.id})"
    >
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img
            class="img-fluid"
            src="${project.img}"
            alt="project image"
        />
    </a>
    <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">${project.title}</p>
    </div>
    </div>`
	)
	$('.row1').html(strHTML)
}

function onOpenModal(id) {
	const project = getProjectById(id)
	$('.name').html(project.name)
	$('.item-intro').html(project.title)
	$('.img-modal').attr('src', project.img)
	$('.desc').html(project.desc)
	$('.date').html(project.publishedAt.toDateString())
	$('.labels').html(project.labels.toString())
    $('.check').attr('href', project.url)
}
