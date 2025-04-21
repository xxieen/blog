<script lang="ts">
  import { onMount } from "svelte";
  import CopyCodeButton from "./CopyCodeButton.svelte";

  onMount(() => {
    // Wait for content to be fully loaded
    setTimeout(() => {
      const preTags = document.querySelectorAll("pre");

      preTags.forEach((preTag: Element) => {
        if (!(preTag instanceof HTMLPreElement)) return;
        
        const classList = Array.from(preTag.classList);

        // Check if it's a code block with language highlighting
        const isCodeBlock = classList.some((className) =>
          className.startsWith("language-")
        );

        if (isCodeBlock && !preTag.parentElement?.classList.contains('relative')) {
          // Create a wrapper for the pre tag to position the copy button
          const newCodeBlockWrapper = document.createElement("div");
          newCodeBlockWrapper.className = "relative";

          // Create the copy button
          new CopyCodeButton({
            target: newCodeBlockWrapper
          });

          if (preTag.parentNode) {
            preTag.parentNode.replaceChild(newCodeBlockWrapper, preTag);
            newCodeBlockWrapper.appendChild(preTag);
            
            // Add a small delay to ensure the button is properly positioned
            setTimeout(() => {
              preTag.style.paddingTop = "2.5rem";
            }, 50);
          }
        }
      });
    }, 100);
  });
</script>

<slot />
