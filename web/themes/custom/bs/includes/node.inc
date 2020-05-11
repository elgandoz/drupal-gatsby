<?php
/**
 * @file
 * Theme and preprocess functions for nodes.
 */

use Drupal\node\NodeInterface;

function bs_preprocess_node(&$variables) {
  $variables['is_front'] = \Drupal::service('path.matcher')->isFrontPage();
}
