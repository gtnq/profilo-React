import note from './data/pic/note.png';
import movie from './data/pic/movie.png';
import recipe from './data/pic/recipe.png';
import scheduler from './data/pic/scheduler.png';
import trivia from './data/pic/trivia.png';
import weather from './data/pic/weather.png';




function Project() {
  return (
    <>
      <h1>Profilo</h1>
      <div className = 'profile'>
        <a href = 'https://gtnq.github.io/Trivia_questions/'><img src = {trivia} alt = 'trivia'></img></a>
        <a href = 'https://wallacethewonderer.github.io/movies_lovers_project/'><img src = {movie} alt = 'movieLookup'></img></a>
        <a href = 'https://recipe-database.herokuapp.com/'><img src = {recipe}alt = 'recipe'></img></a>
        <a href = 'https://note-taker-spc-dbae387d83a0.herokuapp.com/'><img src = {note} alt = 'note'></img></a>
        <a href = 'https://gtnq.github.io/Weather_forcast/'><img src = {weather}alt = 'weather'></img></a>
        <a href = 'https://gtnq.github.io/Little_Calender/'><img src = {scheduler} alt = 'scheduler'></img> </a>
      </div>
    </>
  );
}

export default Project;
