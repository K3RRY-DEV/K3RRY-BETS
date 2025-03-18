<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Football || K3RRY BETS HD</title>
  <link
      rel="shortcut icon"
      href="../favicon image/KH.png"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="../Css/Mobile-nav-bar.css">">
    <link rel="stylesheet" href="../Css/Desktop-nav.css">
  <link rel="stylesheet" href="../Css/Foootball.css">
  <link rel="stylesheet" href="../Media Queries/Football-media-queries.css">>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
</head>
<body>
  <header>
    <?php include('../Nav-Bar/Desktop-nav.html') ?> <!--HEADER OF THE PAGE-->
    <?php include('../Nav-Bar/Mobile-nav-bar.html') ?> <!--MOBILE-FOOTER NAV OF THE PAGE-->
  </header>

  <main>
    <div class="tab-container-mobile">
        <div class="tabs">
            <button class="tab-button active" data-tab="competitions">Competitions</button>
            <button class="tab-button" data-tab="games">Games</button>
            <button class="tab-button" data-tab="lives">Lives</button>
        </div>
        <div class="tab-content">
            <div class="tab-panel active" id="competitions">
            <div class="sports-container js-sports-container"></div>
            </div>
            <div class="tab-panel" id="games">
                <h2>Games Content</h2>
                <p>This is the content for games.</p>
            </div>
            <div class="tab-panel" id="lives">
                <h2>Lives Content</h2>
                <p>This is the content for live streams.</p>
            </div>
        </div>
    </div>
    </main>

  <script type="module" src="../scripts/Football.js"></script>
</body>
</html>