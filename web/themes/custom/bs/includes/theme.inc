<?php
/**
 * @file
 * Custom theme hooks.
 */

 /**
 * Implements hook_library_info_build().
 * Automatically creates components libraries (Not visible in theme's libraries.yml file)
 * You can directly use the component name as a library, f.x
 *  {{ attach_library('bs/block') }}
 */
function bs_library_info_build() {
  $extensions = ['css', 'js'];
  $directory = 'themes/custom/bs/assets/components';
  $extensions = array_map('preg_quote', $extensions);
  $extensions = implode('|', $extensions);
  $file_scan = file_scan_directory($directory, "/{$extensions}$/");
  $libraries = [];
  foreach ($file_scan as $file) {
    $parts = explode('.', $file->filename);
    $extension = end($parts);
    switch ($extension) {
      case 'css':
        $libraries[$file->name][$extension] = [
          'component' => [
            '/' . $file->uri => [],
          ],
        ];
        break;
      case 'js':
        $libraries[$file->name][$extension] = [
          '/' . $file->uri => [],
        ];
        break;
    }
  }
  return $libraries;
}