import React, {useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";



function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFIlter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);

        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        });

        if(searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };

  return (
    <div className="search">
        <div className="searchInputs">
          <input 
          type="text" 
          placeholder={placeholder} 
          value={wordEntered}
          onChange={handleFIlter} 
          />
            <div className="searchIcon">
            {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
            {filteredData.slice(0,1).map((value, index) => {
                return (
                    <a key={index} className="dataItem" href={value.name}>
                        <p>{value.name} </p>
                    </a>
                )

            })}
        </div>
        )}
    </div>
  )
}

export default SearchBar