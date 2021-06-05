<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
  .pokemon{
    margin: 50px;
    display: inline-block;
    float: left;
    width: 150px;
    padding: 50px;
    height: 450px;
    border: 4px solid;
    
  }
  </style>
</head>
<body>

  <?php
    include('koneksi.php');
    
    $sql =  'SELECT * FROM pokemon_tb';
    $query = mysqli_query($koneksi, $sql);

    // $sql2 =  'SELECT * FROM pokemon_tb';
    // $query2 = mysqli_query($koneksi, $sql);

    

    while ($row = mysqli_fetch_array($query))
    {?>
    <div class="pokemon">
     <img src="images/<?php echo $row['photo']; ?>" alt="" srcset="">
     <h2><?php echo $row['name']; ?></h2>
     <p>Strength : <?php echo $row['str']; ?></p>
     <p>Defend : <?php echo $row['def']; ?></p>
     <p>=========</p>
     <p>Elemen : </p>
     <?php
      $query1 = mysqli_query($koneksi, "SELECT * FROM bridge_tb JOIN element_tb ON bridge_tb.element_id = element_tb.id WHERE pokemon_id =".$row['id']);
      while ($row1 = mysqli_fetch_array($query1))
      {
        ?>
        <p><?php echo $row1['name'] ?></p>
        <?php
      }
     ?>
    

    </div>
      <?php
    }
  ?>

</body>
</html>