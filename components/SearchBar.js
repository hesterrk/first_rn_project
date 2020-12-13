import React, { useState} from "react";
import { SearchBar } from 'react-native-elements';


// Re-usable search bar for direct message, explore page, followers, following on profile

export default function SearchBarComponent() {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch({ search });
  };
  return (
    <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
  );
}


