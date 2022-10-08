<script>
  import ProjectCard from '../components/ProjectCard.svelte'
  import projects from '../projects'
</script>

<main>
  <div class="cards-container">
    {#each projects as project (project.title) }
      <ProjectCard
        imgURL={project.imgURL}
        year={project.year}
        title={project.title}
        description={project.description}
        note={project.note}
        tags={project.tags}
        link={project.link}
      />
    {/each}
  </div>
</main>

<style>
  .cards-container {
    padding: 60px;
  }

  @media (max-width: 700px) and (orientation: portrait) {
    .cards-container {
      padding: 17px;
    }
  }
</style>
