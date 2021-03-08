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
    <div className="pl-lg-4 ml-lg-4">
      <Button href="https://github.com/chomieu" variant="dark">
        <img className="whiteIcon mx-2 my-3" src="https://i.imgur.com/BjCzDmv.png?1" alt="github-icon" />
      </Button>
      <Button href="https://www.linkedin.com/in/chomieu/" variant="dark">
        <img className="blackIcon mx-2 my-3" src="https://i.imgur.com/K7fTpjH.png?1" alt="linkedin-icon" />
      </Button>
      <Button variant="dark" ref={target} onClick={() => { emailCopied() }}>
        <img className="blackIcon mx-2" src="https://i.imgur.com/fqeCWKx.png?1" alt="email-icon" />
      </Button>
      <Overlay placement="right" target={target.current} show={show}>
        {(props) => (
          <Tooltip id="emailTooltip" {...props}>
            Email copied!
          </Tooltip>
        )}
      </Overlay>
    </div>
  )
}
