<script>
  const wishlistIcons = document.querySelectorAll(".wishlist");
  wishlistIcons.forEach(icon = > {
    icon.addEventListener("click", () => {
      icon.classList.toggle("active");
    });
  } );
</script>
