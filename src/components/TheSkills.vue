<template>
  <article id="skills">
    <h2 class="title" id="test-skills">Mes compétences IT</h2>
    <div id="skills-content">
      <div class="column left">
        <div class="bars">
          <div class="info">
            <span>Python</span>
            <span>75%</span>
          </div>
          <div class="line python"></div>
        </div>
        <div class="bars">
          <div class="info">
            <span>JavaScript</span>
            <span>80%</span>
          </div>
          <div class="line js"></div>
        </div>
        <div class="bars">
          <div class="info">
            <span>Linux / Git</span>
            <span>70%</span>
          </div>
          <div class="line linux-git"></div>
        </div>
      </div>
      <div class="column right">
        <div class="bars">
          <div class="info">
            <span>HTML / CSS</span>
            <span>80%</span>
          </div>
          <div class="line html-css"></div>
        </div>
        <div class="bars">
          <div class="info">
            <span>Flutter</span>
            <span>50%</span>
          </div>
          <div class="line flutter"></div>
        </div>
        <div class="bars">
          <div class="info">
            <span>SQL</span>
            <span>75%</span>
          </div>
          <div class="line sql"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
#skills-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px 20px; /* row-gap column gap */
}

#skills-content .column {
  width: calc(50% - 20px);
  min-width: 300px;
}

#skills-content .bars {
  margin-bottom: 15px;
}

#skills-content .info {
  display: flex;
  justify-content: space-between;
}

#skills-content span {
  font-weight: 500;
  font-size: 18px;
}

#skills-content .line {
  height: 0.8em;
  width: 100%;
  background: lightgrey;
  position: relative;
}
#skills-content .line::before {
  content: '';
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  background: crimson;
}
#skills-content .python::before {
  width: 75%;
}
#skills-content .js::before {
  width: 80%;
}
#skills-content .linux-git::before {
  width: 70%;
}

#skills-content .html-css::before {
  width: 80%;
}
#skills-content .flutter::before {
  width: 50%;
}
#skills-content .sql::before {
  width: 75%;
}
</style>
