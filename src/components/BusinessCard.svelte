<script>
  // props
  export let title
  export let description
  export let tags
  export let imgURL
</script>

<div class="card">
  <div class="texts-container">
    <div>
      <div class="title">{title}</div>
      <p class="description">{description}</p>
    </div>
    <div class="tags-container">
      {#each tags as tag (tag)}
        <div class="tag center">{tag}</div>
      {/each}
    </div>
  </div>
  <img src={imgURL} alt="" width="262" height="auto" />
</div>

<style>
  .card {
    background-color: white;
    border-bottom: 2px solid black;
    padding: 25px 23px;
    display: flex;
  }

  .texts-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    margin-left: 34px;
  }

  .title {
    font-weight: 700;
    font-size: 25px;
    text-align: start;
    height: 54px;
  }

  .description {
    margin: 0px;
    font-weight: 500;
    font-size: 20px;
    text-align: start;
  }

  .tags-container {
    display: flex;
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
