<?php
$output = shell_exec('Average_sales_calculator.py');
echo $output;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file-upload'])) {
  // Get the uploaded file
  $file = $_FILES['file-upload'];

  // Get the file name and extension
  $filename = basename($file['name']);
  $extension = pathinfo($filename, PATHINFO_EXTENSION);

  // Check that the file has a .py extension
  if ($extension === 'py') {
    // Move the file to the same directory as this script
    $destination = __DIR__ . '/' . $filename;
    move_uploaded_file($file['tmp_name'], $destination);

    // Set the output buffer to capture the script's output
    ob_start();

    // Run the script and capture the output
    system("python $destination");

    $output = ob_get_clean();

    // Send the output back to the client
    echo $output;
  }
}
?>
