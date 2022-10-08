<script>
  import LinkButton from './LinkButton.svelte'

  export let imgURL
  export let year
  export let title
  export let description
  export let note
  export let tags
  export let link
</script>

<div class="card">
  <img src={imgURL} alt="" />
  <div class="texts-container">
    <div>
      <div class="year">{year}</div>
      <div class="title">{title}</div>
      <div class="description">{description}</div>
      <div class="note">{note}</div>
      <div class="tags-container">
        {#each tags as tag (tag)}
          <div class="tag center">{tag}</div>
        {/each}
      </div>
    </div>
    <LinkButton link={link} text="더 알아보기" isDark={false} />
  </div>
</div>

<style>
  .card {
    display: flex;
    border: 2px solid black;
  }

  .card:not(:last-child) {
    margin-bottom: 60px;
  }

  img {
    width: 360px;
    height: 360px;
    flex-shrink: 0;
  }

  .texts-container {
    margin: 52px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .texts-container * {
    text-align: start;
  }

  .year {
    font-weight: 800;
    font-size: 14px;
    color: #888888;
    margin-bottom: 15px;
  }

  .title {
    font-size: 25px;
    color: black;
    margin-bottom: 15px;
  }

  .description {
    font-size: 14px;
    color: black;
  }

  .note {
    font-size: 14px;
    color: #888888;
  }

  .tags-container {
    display: flex;
    margin-top: 15px;
  }

  .tag {
    font-size: 10px;
    color: #555555;
    padding: 6px 12px;
    border: 1px solid #BBBBBB;
    border-radius: 20px;
  }

  .tag:not(:last-child) {
    margin-right: 8px;
  }
</style>
