import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>Search for books</h1>
        <div className="form-wrapper">
          <form>
            <input type="text" id="search" name="search" placeholder="Enter title..." />

            <label for="category">Categories:</label>
            <select id="category" name="category">
              <option value="all" selected>All</option>
              <option value="art">Art</option>
              <option value="biography">Biography</option>
              <option value="computers">Computers</option>
              <option value="history">History</option>
              <option value="medical">Medical</option>
              <option value="poetry">Poetry</option>
            </select>
            
            <label for="sorting">Sorting by:</label>
            <select id="sorting" name="sorting">
              <option value="relevance" selected>Relevance</option>
              <option value="newest">Newest</option>
            </select>
          </form>
        </div>
      </div>
    </header>
  )
}
 
export default Header