import note from "./data/pic/note.png";
import movie from "./data/pic/movie.png";
import recipe from "./data/pic/recipe.png";
import scheduler from "./data/pic/scheduler.png";
import trivia from "./data/pic/trivia.png";
import weather from "./data/pic/weather.png";

function Project() {
    return (
        <>
            <h1>Profilo</h1>
            <div className="profile">
                <div>
                    <a href="https://gtnq.github.io/Trivia_questions/">
                        <img src={trivia} alt="trivia"></img>
                    </a>
                    <br />
                    <a href="https://github.com/gtnq/Trivia_questions">Trivia Questions</a>
                </div>
                <div>
                    <a href="https://wallacethewonderer.github.io/movies_lovers_project/">
                        <img src={movie} alt="movieLookup"></img>
                    </a>
                    <br />
                    <a href="https://github.com/Wallacethewonderer/movies_lovers_project">Movie Finder</a>
                </div>
                <div>
                    <a href="https://recipe-database.herokuapp.com/">
                        <img src={recipe} alt="recipe"></img>
                    </a>
                    <br />
                    <a href="https://github.com/YaslinskiyM/Recipe-Database">Recipe Database</a>
                </div>
                <div>
                    <a href="https://note-taker-spc-dbae387d83a0.herokuapp.com/">
                        <img src={note} alt="note"></img>
                    </a>
                    <br />
                    <a href="https://github.com/gtnq/note_taker">Note taker</a>
                </div>
                <div>
                    <a href="https://gtnq.github.io/Weather_forcast/">
                        <img src={weather} alt="weather"></img>
                    </a>
                    <br />
                    <a href="https://github.com/gtnq/Weather_forcast">Weather report</a>
                </div>
                <div>
                    <a href="https://gtnq.github.io/Little_Calender/">
                        <img src={scheduler} alt="scheduler"></img>{" "}
                    </a>
                    <br />
                    <a href="https://github.com/gtnq/Little_Calender">Calendar</a>
                </div>
            </div>
        </>
    );
}

export default Project;
