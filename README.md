# `<Tabbed />`

> Tab component with render props.


## Install

```sh
$ npm i react-tabbed
```


## Usage

```js
import Tabbed from 'react-tabbed'

<Tabbed
  render={
    ({ getTabProps, isActiveTab, setActiveTab }) => {
      return (
        <div>
          <nav>
            <a
              href="#"
              {
                ...getTabProps({
                  index: 0,
                  onClick: (e) => { e.preventDefault(); console.log(this) },
                })
              }
              style={{ color: isActiveTab(0) ? '#f00' : '#000' }}
            >tab 1</a>
            <a href="#" { ...getTabProps({ index: 1 }) } style={{ color: isActiveTab(1) ? '#f00' : '#000' }}>tab 2</a>
            <a href="#" { ...getTabProps({ index: 2 }) } style={{ color: isActiveTab(2) ? '#f00' : '#000' }}>tab 3</a>
          </nav>
          <div>
            { isActiveTab(0) && <div>1</div> }
            { isActiveTab(1) && <div>2</div> }
            { isActiveTab(2) && <div>3</div> }
          </div>
        </div>
      )
    }
  }
/>
```


## License

MIT