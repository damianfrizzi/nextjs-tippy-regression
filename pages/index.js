import Tippy from "@tippyjs/react";

export default () => (
  <>
    This breaks in Prod but not in Dev
    <Tippy content={<>Tooltip</>}>
      <span>Trigger</span>
    </Tippy>
  </>
);
