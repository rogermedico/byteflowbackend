<?php

/**
 * @file
 * Contains \Drupal\bitcoinoperation\Controller\BitcoinOperationController.
 */

namespace Drupal\bitcoinoperation\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Controller for Bitcoin Operation
 */
class BitcoinOperationController extends ControllerBase {

  public static function getBitcoinPrice(): int {
    return rand(40000,60000);
  }

}
