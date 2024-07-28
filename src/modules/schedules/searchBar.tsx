import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import type { AutoCompleteProps } from "antd";

const initialoptions = [
  {
    label: "AWS",
    value: "AWS",
  },
  {
    label: "Azure",
    value: "Azure",
  },
];

export default function SearchBar() {
  const [options, setOptions] =
    useState<AutoCompleteProps["options"]>(initialoptions);

  //   const handleSearch = (value: string) => {
  //     setOptions(!value? []:);
  //   };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <AutoComplete
      popupClassName="certain-category-search-dropdown"
      popupMatchSelectWidth={500}
      style={{ width: 500 }}
      options={options}
      onSelect={onSelect}
      //onSearch={handleSearch}
      size="large"
      //placeholder="Customized clear icon"
    >
      <Input.Search size="large" placeholder="input here" />
    </AutoComplete>
  );
}
