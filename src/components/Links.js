import { React, useState, useRef } from "react"
import { Button, Overlay, Tooltip } from "react-bootstrap"

export default function Links() {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const emailCopied = () => {
    navigator.clipboard.writeText("chomieu@gmail.com")
    setShow(!show)
  }

  return (
    <div className="pl-lg-5 pr-1 ml-lg-5">
      <Button href="https://github.com/chomieu" variant="link">
        <img class="whiteIcon ml-2" src="https://i.imgur.com/BjCzDmv.png?1" alt="github-icon" />
      </Button>
      <Button href="https://www.linkedin.com/in/chomieu/" variant="link">
        <img class="blackIcon mr-2 ml-1" src="https://i.imgur.com/K7fTpjH.png?1" alt="linkedin-icon" />
      </Button>
      <Button variant="link" ref={target} onClick={() => { emailCopied() }}>
        <img class="blackIcon mr-2 ml-1" src="https://i.imgur.com/fqeCWKx.png?1" alt="email-icon" />
      </Button>
      <Overlay placement="right" target={target.current} show={show}>
        {(props) => (
          <Tooltip {...props}>
            Email copied!
          </Tooltip>
        )}
      </Overlay>
    </div>
  )
}
