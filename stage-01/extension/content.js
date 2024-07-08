chrome.runtime.sendMessage({ type: "amazonOrNot" }, function (response) {
  if (response && response.result) {
    // This timeout will wait for 3 sec to render let render amazon website fully
    setTimeout(function () {
      const linkOfProduct = document.querySelector('link[rel="canonical"]');

      const productTitle = document.querySelector('span[id="productTitle"]');

      if (linkOfProduct) {
        console.log("Link of Product", linkOfProduct.href);
      }

      if (productTitle) {
        console.log("Product Title: ", productTitle.textContent.trim());
      }
    }, 3000);
  } else {
    console.log("This is not an Amazon Page");
  }
});
