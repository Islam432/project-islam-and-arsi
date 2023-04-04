import Styles from "./Grids.module.css"

const Grids = () => {
    return (
        <div className={Styles.grid_container}>
            <div className={Styles.first_grid}>
            <button type="submit" className={Styles.card_button}>
            Organic Juice
        </button>

            </div>
            <div className={Styles.second_grid}>
            <button type="submit" className={Styles.card_button}>
            Organic Food
        </button>

            </div>
            <div className={Styles.three_grid}>
            <button type="submit" className={Styles.card_button}>
            Nuts Cookis
        </button>

            </div>
        </div>
  
    )
  }
  
  export default Grids