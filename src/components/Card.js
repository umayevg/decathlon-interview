import classes from './Card.module.css'

const Card = ({game, cardClickFunc}) => {
    const cardClickHandler = () => {
        cardClickFunc(game)
    }

    return (
        <div className={classes.card} key={game.name} onClick={cardClickHandler}>
            <div className={classes.cardImg}>
                {game.metacritic && <span>{game.metacritic}</span>}
                <img src={game.background_image} alt={game.name} height="190" loading="lazy" decoding="async"
                     style={{contentVisibility: 'auto'}}/>
            </div>

            <div className={classes.cardContent}>
                <h2>{game.name}</h2>
                <div className="platforms">
                    {game.platforms?.map(platform => (
                        <span className={classes.platform} key={platform.platform.name}>{platform.platform.name}</span>
                    ))}
                </div>
                <div className={classes.tags}>
                    {game.tags?.slice(0, 2).map(tag => (
                        <span key={tag.name}>{tag.name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;