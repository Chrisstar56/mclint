module.exports = {
  "type": "root",
  "children": {
    "advancement": {
      "type": "literal",
      "children": {
        "grant": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "children": {
                "everything": {
                  "type": "literal",
                  "executable": true
                },
                "from": {
                  "type": "literal",
                  "children": {
                    "advancement": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                },
                "only": {
                  "type": "literal",
                  "children": {
                    "advancement": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "children": {
                        "criterion": {
                          "type": "argument",
                          "parser": "brigadier:string",
                          "properties": {
                            "type": "greedy"
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  }
                },
                "through": {
                  "type": "literal",
                  "children": {
                    "advancement": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                },
                "until": {
                  "type": "literal",
                  "children": {
                    "advancement": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        },
        "revoke": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "children": {
                "everything": {
                  "type": "literal",
                  "executable": true
                },
                "from": {
                  "type": "literal",
                  "children": {
                    "advancement": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                },
                "only": {
                  "type": "literal",
                  "children": {
                    "advancement": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "children": {
                        "criterion": {
                          "type": "argument",
                          "parser": "brigadier:string",
                          "properties": {
                            "type": "greedy"
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  }
                },
                "through": {
                  "type": "literal",
                  "children": {
                    "advancement": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                },
                "until": {
                  "type": "literal",
                  "children": {
                    "advancement": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "ban": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:game_profile",
          "children": {
            "reason": {
              "type": "argument",
              "parser": "minecraft:message",
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "ban-ip": {
      "type": "literal",
      "children": {
        "target": {
          "type": "argument",
          "parser": "brigadier:string",
          "properties": {
            "type": "word"
          },
          "children": {
            "reason": {
              "type": "argument",
              "parser": "minecraft:message",
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "banlist": {
      "type": "literal",
      "children": {
        "ips": {
          "type": "literal",
          "executable": true
        },
        "players": {
          "type": "literal",
          "executable": true
        }
      },
      "executable": true
    },
    "bossbar": {
      "type": "literal",
      "children": {
        "add": {
          "type": "literal",
          "children": {
            "id": {
              "type": "argument",
              "parser": "minecraft:resource_location",
              "children": {
                "name": {
                  "type": "argument",
                  "parser": "minecraft:component",
                  "executable": true
                }
              }
            }
          }
        },
        "get": {
          "type": "literal",
          "children": {
            "id": {
              "type": "argument",
              "parser": "minecraft:resource_location",
              "children": {
                "max": {
                  "type": "literal",
                  "executable": true
                },
                "players": {
                  "type": "literal",
                  "executable": true
                },
                "value": {
                  "type": "literal",
                  "executable": true
                },
                "visible": {
                  "type": "literal",
                  "executable": true
                }
              }
            }
          }
        },
        "list": {
          "type": "literal",
          "executable": true
        },
        "remove": {
          "type": "literal",
          "children": {
            "id": {
              "type": "argument",
              "parser": "minecraft:resource_location",
              "executable": true
            }
          }
        },
        "set": {
          "type": "literal",
          "children": {
            "id": {
              "type": "argument",
              "parser": "minecraft:resource_location",
              "children": {
                "color": {
                  "type": "literal",
                  "children": {
                    "blue": {
                      "type": "literal",
                      "executable": true
                    },
                    "green": {
                      "type": "literal",
                      "executable": true
                    },
                    "pink": {
                      "type": "literal",
                      "executable": true
                    },
                    "purple": {
                      "type": "literal",
                      "executable": true
                    },
                    "red": {
                      "type": "literal",
                      "executable": true
                    },
                    "white": {
                      "type": "literal",
                      "executable": true
                    },
                    "yellow": {
                      "type": "literal",
                      "executable": true
                    }
                  }
                },
                "max": {
                  "type": "literal",
                  "children": {
                    "max": {
                      "type": "argument",
                      "parser": "brigadier:integer",
                      "properties": {
                        "min": 1
                      },
                      "executable": true
                    }
                  }
                },
                "name": {
                  "type": "literal",
                  "children": {
                    "name": {
                      "type": "argument",
                      "parser": "minecraft:component",
                      "executable": true
                    }
                  }
                },
                "players": {
                  "type": "literal",
                  "children": {
                    "targets": {
                      "type": "argument",
                      "parser": "minecraft:entity",
                      "properties": {
                        "amount": "multiple",
                        "type": "players"
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                },
                "style": {
                  "type": "literal",
                  "children": {
                    "notched_10": {
                      "type": "literal",
                      "executable": true
                    },
                    "notched_12": {
                      "type": "literal",
                      "executable": true
                    },
                    "notched_20": {
                      "type": "literal",
                      "executable": true
                    },
                    "notched_6": {
                      "type": "literal",
                      "executable": true
                    },
                    "progress": {
                      "type": "literal",
                      "executable": true
                    }
                  }
                },
                "value": {
                  "type": "literal",
                  "children": {
                    "value": {
                      "type": "argument",
                      "parser": "brigadier:integer",
                      "properties": {
                        "min": 0
                      },
                      "executable": true
                    }
                  }
                },
                "visible": {
                  "type": "literal",
                  "children": {
                    "visible": {
                      "type": "argument",
                      "parser": "brigadier:bool",
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "clear": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "players"
          },
          "children": {
            "item": {
              "type": "argument",
              "parser": "minecraft:item_predicate",
              "children": {
                "maxCount": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 0
                  },
                  "executable": true
                }
              },
              "executable": true
            }
          },
          "executable": true
        }
      },
      "executable": true
    },
    "clone": {
      "type": "literal",
      "children": {
        "begin": {
          "type": "argument",
          "parser": "minecraft:block_pos",
          "children": {
            "end": {
              "type": "argument",
              "parser": "minecraft:block_pos",
              "children": {
                "destination": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "filtered": {
                      "type": "literal",
                      "children": {
                        "filter": {
                          "type": "argument",
                          "parser": "minecraft:block_predicate",
                          "children": {
                            "force": {
                              "type": "literal",
                              "executable": true
                            },
                            "move": {
                              "type": "literal",
                              "executable": true
                            },
                            "normal": {
                              "type": "literal",
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      }
                    },
                    "masked": {
                      "type": "literal",
                      "children": {
                        "force": {
                          "type": "literal",
                          "executable": true
                        },
                        "move": {
                          "type": "literal",
                          "executable": true
                        },
                        "normal": {
                          "type": "literal",
                          "executable": true
                        }
                      },
                      "executable": true
                    },
                    "replace": {
                      "type": "literal",
                      "children": {
                        "force": {
                          "type": "literal",
                          "executable": true
                        },
                        "move": {
                          "type": "literal",
                          "executable": true
                        },
                        "normal": {
                          "type": "literal",
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "data": {
      "type": "literal",
      "children": {
        "get": {
          "type": "literal",
          "children": {
            "block": {
              "type": "literal",
              "children": {
                "targetPos": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "path": {
                      "type": "argument",
                      "parser": "minecraft:nbt_path",
                      "children": {
                        "scale": {
                          "type": "argument",
                          "parser": "brigadier:double",
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "entity": {
              "type": "literal",
              "children": {
                "target": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "single",
                    "type": "entities"
                  },
                  "children": {
                    "path": {
                      "type": "argument",
                      "parser": "minecraft:nbt_path",
                      "children": {
                        "scale": {
                          "type": "argument",
                          "parser": "brigadier:double",
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            }
          }
        },
        "merge": {
          "type": "literal",
          "children": {
            "block": {
              "type": "literal",
              "children": {
                "targetPos": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "nbt": {
                      "type": "argument",
                      "parser": "minecraft:nbt_compound_tag",
                      "executable": true
                    }
                  }
                }
              }
            },
            "entity": {
              "type": "literal",
              "children": {
                "target": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "single",
                    "type": "entities"
                  },
                  "children": {
                    "nbt": {
                      "type": "argument",
                      "parser": "minecraft:nbt_compound_tag",
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        },
        "modify": {
          "type": "literal",
          "children": {
            "block": {
              "type": "literal",
              "children": {
                "targetPos": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "targetPath": {
                      "type": "argument",
                      "parser": "minecraft:nbt_path",
                      "children": {
                        "append": {
                          "type": "literal",
                          "children": {
                            "from": {
                              "type": "literal",
                              "children": {
                                "block": {
                                  "type": "literal",
                                  "children": {
                                    "sourcePos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                },
                                "entity": {
                                  "type": "literal",
                                  "children": {
                                    "source": {
                                      "type": "argument",
                                      "parser": "minecraft:entity",
                                      "properties": {
                                        "amount": "single",
                                        "type": "entities"
                                      },
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "value": {
                              "type": "literal",
                              "children": {
                                "value": {
                                  "type": "argument",
                                  "parser": "minecraft:nbt_tag",
                                  "executable": true
                                }
                              }
                            }
                          }
                        },
                        "insert": {
                          "type": "literal",
                          "children": {
                            "index": {
                              "type": "argument",
                              "parser": "brigadier:integer",
                              "children": {
                                "from": {
                                  "type": "literal",
                                  "children": {
                                    "block": {
                                      "type": "literal",
                                      "children": {
                                        "sourcePos": {
                                          "type": "argument",
                                          "parser": "minecraft:block_pos",
                                          "children": {
                                            "sourcePath": {
                                              "type": "argument",
                                              "parser": "minecraft:nbt_path",
                                              "executable": true
                                            }
                                          },
                                          "executable": true
                                        }
                                      }
                                    },
                                    "entity": {
                                      "type": "literal",
                                      "children": {
                                        "source": {
                                          "type": "argument",
                                          "parser": "minecraft:entity",
                                          "properties": {
                                            "amount": "single",
                                            "type": "entities"
                                          },
                                          "children": {
                                            "sourcePath": {
                                              "type": "argument",
                                              "parser": "minecraft:nbt_path",
                                              "executable": true
                                            }
                                          },
                                          "executable": true
                                        }
                                      }
                                    }
                                  }
                                },
                                "value": {
                                  "type": "literal",
                                  "children": {
                                    "value": {
                                      "type": "argument",
                                      "parser": "minecraft:nbt_tag",
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "merge": {
                          "type": "literal",
                          "children": {
                            "from": {
                              "type": "literal",
                              "children": {
                                "block": {
                                  "type": "literal",
                                  "children": {
                                    "sourcePos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                },
                                "entity": {
                                  "type": "literal",
                                  "children": {
                                    "source": {
                                      "type": "argument",
                                      "parser": "minecraft:entity",
                                      "properties": {
                                        "amount": "single",
                                        "type": "entities"
                                      },
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "value": {
                              "type": "literal",
                              "children": {
                                "value": {
                                  "type": "argument",
                                  "parser": "minecraft:nbt_tag",
                                  "executable": true
                                }
                              }
                            }
                          }
                        },
                        "prepend": {
                          "type": "literal",
                          "children": {
                            "from": {
                              "type": "literal",
                              "children": {
                                "block": {
                                  "type": "literal",
                                  "children": {
                                    "sourcePos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                },
                                "entity": {
                                  "type": "literal",
                                  "children": {
                                    "source": {
                                      "type": "argument",
                                      "parser": "minecraft:entity",
                                      "properties": {
                                        "amount": "single",
                                        "type": "entities"
                                      },
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "value": {
                              "type": "literal",
                              "children": {
                                "value": {
                                  "type": "argument",
                                  "parser": "minecraft:nbt_tag",
                                  "executable": true
                                }
                              }
                            }
                          }
                        },
                        "set": {
                          "type": "literal",
                          "children": {
                            "from": {
                              "type": "literal",
                              "children": {
                                "block": {
                                  "type": "literal",
                                  "children": {
                                    "sourcePos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                },
                                "entity": {
                                  "type": "literal",
                                  "children": {
                                    "source": {
                                      "type": "argument",
                                      "parser": "minecraft:entity",
                                      "properties": {
                                        "amount": "single",
                                        "type": "entities"
                                      },
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "value": {
                              "type": "literal",
                              "children": {
                                "value": {
                                  "type": "argument",
                                  "parser": "minecraft:nbt_tag",
                                  "executable": true
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "entity": {
              "type": "literal",
              "children": {
                "target": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "single",
                    "type": "entities"
                  },
                  "children": {
                    "targetPath": {
                      "type": "argument",
                      "parser": "minecraft:nbt_path",
                      "children": {
                        "append": {
                          "type": "literal",
                          "children": {
                            "from": {
                              "type": "literal",
                              "children": {
                                "block": {
                                  "type": "literal",
                                  "children": {
                                    "sourcePos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                },
                                "entity": {
                                  "type": "literal",
                                  "children": {
                                    "source": {
                                      "type": "argument",
                                      "parser": "minecraft:entity",
                                      "properties": {
                                        "amount": "single",
                                        "type": "entities"
                                      },
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "value": {
                              "type": "literal",
                              "children": {
                                "value": {
                                  "type": "argument",
                                  "parser": "minecraft:nbt_tag",
                                  "executable": true
                                }
                              }
                            }
                          }
                        },
                        "insert": {
                          "type": "literal",
                          "children": {
                            "index": {
                              "type": "argument",
                              "parser": "brigadier:integer",
                              "children": {
                                "from": {
                                  "type": "literal",
                                  "children": {
                                    "block": {
                                      "type": "literal",
                                      "children": {
                                        "sourcePos": {
                                          "type": "argument",
                                          "parser": "minecraft:block_pos",
                                          "children": {
                                            "sourcePath": {
                                              "type": "argument",
                                              "parser": "minecraft:nbt_path",
                                              "executable": true
                                            }
                                          },
                                          "executable": true
                                        }
                                      }
                                    },
                                    "entity": {
                                      "type": "literal",
                                      "children": {
                                        "source": {
                                          "type": "argument",
                                          "parser": "minecraft:entity",
                                          "properties": {
                                            "amount": "single",
                                            "type": "entities"
                                          },
                                          "children": {
                                            "sourcePath": {
                                              "type": "argument",
                                              "parser": "minecraft:nbt_path",
                                              "executable": true
                                            }
                                          },
                                          "executable": true
                                        }
                                      }
                                    }
                                  }
                                },
                                "value": {
                                  "type": "literal",
                                  "children": {
                                    "value": {
                                      "type": "argument",
                                      "parser": "minecraft:nbt_tag",
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "merge": {
                          "type": "literal",
                          "children": {
                            "from": {
                              "type": "literal",
                              "children": {
                                "block": {
                                  "type": "literal",
                                  "children": {
                                    "sourcePos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                },
                                "entity": {
                                  "type": "literal",
                                  "children": {
                                    "source": {
                                      "type": "argument",
                                      "parser": "minecraft:entity",
                                      "properties": {
                                        "amount": "single",
                                        "type": "entities"
                                      },
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "value": {
                              "type": "literal",
                              "children": {
                                "value": {
                                  "type": "argument",
                                  "parser": "minecraft:nbt_tag",
                                  "executable": true
                                }
                              }
                            }
                          }
                        },
                        "prepend": {
                          "type": "literal",
                          "children": {
                            "from": {
                              "type": "literal",
                              "children": {
                                "block": {
                                  "type": "literal",
                                  "children": {
                                    "sourcePos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                },
                                "entity": {
                                  "type": "literal",
                                  "children": {
                                    "source": {
                                      "type": "argument",
                                      "parser": "minecraft:entity",
                                      "properties": {
                                        "amount": "single",
                                        "type": "entities"
                                      },
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "value": {
                              "type": "literal",
                              "children": {
                                "value": {
                                  "type": "argument",
                                  "parser": "minecraft:nbt_tag",
                                  "executable": true
                                }
                              }
                            }
                          }
                        },
                        "set": {
                          "type": "literal",
                          "children": {
                            "from": {
                              "type": "literal",
                              "children": {
                                "block": {
                                  "type": "literal",
                                  "children": {
                                    "sourcePos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                },
                                "entity": {
                                  "type": "literal",
                                  "children": {
                                    "source": {
                                      "type": "argument",
                                      "parser": "minecraft:entity",
                                      "properties": {
                                        "amount": "single",
                                        "type": "entities"
                                      },
                                      "children": {
                                        "sourcePath": {
                                          "type": "argument",
                                          "parser": "minecraft:nbt_path",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "value": {
                              "type": "literal",
                              "children": {
                                "value": {
                                  "type": "argument",
                                  "parser": "minecraft:nbt_tag",
                                  "executable": true
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "remove": {
          "type": "literal",
          "children": {
            "block": {
              "type": "literal",
              "children": {
                "targetPos": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "path": {
                      "type": "argument",
                      "parser": "minecraft:nbt_path",
                      "executable": true
                    }
                  }
                }
              }
            },
            "entity": {
              "type": "literal",
              "children": {
                "target": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "single",
                    "type": "entities"
                  },
                  "children": {
                    "path": {
                      "type": "argument",
                      "parser": "minecraft:nbt_path",
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "datapack": {
      "type": "literal",
      "children": {
        "disable": {
          "type": "literal",
          "children": {
            "name": {
              "type": "argument",
              "parser": "brigadier:string",
              "properties": {
                "type": "phrase"
              },
              "executable": true
            }
          }
        },
        "enable": {
          "type": "literal",
          "children": {
            "name": {
              "type": "argument",
              "parser": "brigadier:string",
              "properties": {
                "type": "phrase"
              },
              "children": {
                "after": {
                  "type": "literal",
                  "children": {
                    "existing": {
                      "type": "argument",
                      "parser": "brigadier:string",
                      "properties": {
                        "type": "phrase"
                      },
                      "executable": true
                    }
                  }
                },
                "before": {
                  "type": "literal",
                  "children": {
                    "existing": {
                      "type": "argument",
                      "parser": "brigadier:string",
                      "properties": {
                        "type": "phrase"
                      },
                      "executable": true
                    }
                  }
                },
                "first": {
                  "type": "literal",
                  "executable": true
                },
                "last": {
                  "type": "literal",
                  "executable": true
                }
              },
              "executable": true
            }
          }
        },
        "list": {
          "type": "literal",
          "children": {
            "available": {
              "type": "literal",
              "executable": true
            },
            "enabled": {
              "type": "literal",
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "debug": {
      "type": "literal",
      "children": {
        "start": {
          "type": "literal",
          "executable": true
        },
        "stop": {
          "type": "literal",
          "executable": true
        }
      }
    },
    "defaultgamemode": {
      "type": "literal",
      "children": {
        "adventure": {
          "type": "literal",
          "executable": true
        },
        "creative": {
          "type": "literal",
          "executable": true
        },
        "spectator": {
          "type": "literal",
          "executable": true
        },
        "survival": {
          "type": "literal",
          "executable": true
        }
      }
    },
    "deop": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:game_profile",
          "executable": true
        }
      }
    },
    "difficulty": {
      "type": "literal",
      "children": {
        "easy": {
          "type": "literal",
          "executable": true
        },
        "hard": {
          "type": "literal",
          "executable": true
        },
        "normal": {
          "type": "literal",
          "executable": true
        },
        "peaceful": {
          "type": "literal",
          "executable": true
        }
      },
      "executable": true
    },
    "effect": {
      "type": "literal",
      "children": {
        "clear": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "entities"
              },
              "children": {
                "effect": {
                  "type": "argument",
                  "parser": "minecraft:mob_effect",
                  "executable": true
                }
              },
              "executable": true
            }
          }
        },
        "give": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "entities"
              },
              "children": {
                "effect": {
                  "type": "argument",
                  "parser": "minecraft:mob_effect",
                  "children": {
                    "seconds": {
                      "type": "argument",
                      "parser": "brigadier:integer",
                      "properties": {
                        "min": 1,
                        "max": 1000000
                      },
                      "children": {
                        "amplifier": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 0,
                            "max": 255
                          },
                          "children": {
                            "hideParticles": {
                              "type": "argument",
                              "parser": "brigadier:bool",
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "enchant": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "entities"
          },
          "children": {
            "enchantment": {
              "type": "argument",
              "parser": "minecraft:item_enchantment",
              "children": {
                "level": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 0
                  },
                  "executable": true
                }
              },
              "executable": true
            }
          }
        }
      }
    },
    "execute": {
      "type": "literal",
      "children": {
        "align": {
          "type": "literal",
          "children": {
            "axes": {
              "type": "argument",
              "parser": "minecraft:swizzle",
              "redirect": [
                "execute"
              ]
            }
          }
        },
        "anchored": {
          "type": "literal",
          "children": {
            "anchor": {
              "type": "argument",
              "parser": "minecraft:entity_anchor",
              "redirect": [
                "execute"
              ]
            }
          }
        },
        "as": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "entities"
              },
              "redirect": [
                "execute"
              ]
            }
          }
        },
        "at": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "entities"
              },
              "redirect": [
                "execute"
              ]
            }
          }
        },
        "facing": {
          "type": "literal",
          "children": {
            "entity": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "entities"
                  },
                  "children": {
                    "anchor": {
                      "type": "argument",
                      "parser": "minecraft:entity_anchor",
                      "redirect": [
                        "execute"
                      ]
                    }
                  }
                }
              }
            },
            "pos": {
              "type": "argument",
              "parser": "minecraft:vec3",
              "redirect": [
                "execute"
              ]
            }
          }
        },
        "if": {
          "type": "literal",
          "children": {
            "block": {
              "type": "literal",
              "children": {
                "pos": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "block": {
                      "type": "argument",
                      "parser": "minecraft:block_predicate",
                      "executable": true,
                      "redirect": [
                        "execute"
                      ]
                    }
                  }
                }
              }
            },
            "blocks": {
              "type": "literal",
              "children": {
                "start": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "end": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "destination": {
                          "type": "argument",
                          "parser": "minecraft:block_pos",
                          "children": {
                            "all": {
                              "type": "literal",
                              "executable": true,
                              "redirect": [
                                "execute"
                              ]
                            },
                            "masked": {
                              "type": "literal",
                              "executable": true,
                              "redirect": [
                                "execute"
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "data": {
              "type": "literal",
              "children": {
                "block": {
                  "type": "literal",
                  "children": {
                    "sourcePos": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "path": {
                          "type": "argument",
                          "parser": "minecraft:nbt_path",
                          "executable": true,
                          "redirect": [
                            "execute"
                          ]
                        }
                      }
                    }
                  }
                },
                "entity": {
                  "type": "literal",
                  "children": {
                    "source": {
                      "type": "argument",
                      "parser": "minecraft:entity",
                      "properties": {
                        "amount": "single",
                        "type": "entities"
                      },
                      "children": {
                        "path": {
                          "type": "argument",
                          "parser": "minecraft:nbt_path",
                          "executable": true,
                          "redirect": [
                            "execute"
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "entity": {
              "type": "literal",
              "children": {
                "entities": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "entities"
                  },
                  "executable": true,
                  "redirect": [
                    "execute"
                  ]
                }
              }
            },
            "score": {
              "type": "literal",
              "children": {
                "target": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "single"
                  },
                  "children": {
                    "targetObjective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "children": {
                        "<": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "<=": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "=": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        ">": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        ">=": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "matches": {
                          "type": "literal",
                          "children": {
                            "range": {
                              "type": "argument",
                              "parser": "minecraft:int_range",
                              "executable": true,
                              "redirect": [
                                "execute"
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "in": {
          "type": "literal",
          "children": {
            "dimension": {
              "type": "argument",
              "parser": "minecraft:dimension",
              "redirect": [
                "execute"
              ]
            }
          }
        },
        "positioned": {
          "type": "literal",
          "children": {
            "as": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "entities"
                  },
                  "redirect": [
                    "execute"
                  ]
                }
              }
            },
            "pos": {
              "type": "argument",
              "parser": "minecraft:vec3",
              "redirect": [
                "execute"
              ]
            }
          }
        },
        "rotated": {
          "type": "literal",
          "children": {
            "as": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "entities"
                  },
                  "redirect": [
                    "execute"
                  ]
                }
              }
            },
            "rot": {
              "type": "argument",
              "parser": "minecraft:rotation",
              "redirect": [
                "execute"
              ]
            }
          }
        },
        "run": {
          "type": "literal",
          "redirect": [
            "root"
          ]
        },
        "store": {
          "type": "literal",
          "children": {
            "result": {
              "type": "literal",
              "children": {
                "block": {
                  "type": "literal",
                  "children": {
                    "targetPos": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "path": {
                          "type": "argument",
                          "parser": "minecraft:nbt_path",
                          "children": {
                            "byte": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "double": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "float": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "int": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "long": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "short": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "bossbar": {
                  "type": "literal",
                  "children": {
                    "id": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "children": {
                        "max": {
                          "type": "literal",
                          "redirect": [
                            "execute"
                          ]
                        },
                        "value": {
                          "type": "literal",
                          "redirect": [
                            "execute"
                          ]
                        }
                      }
                    }
                  }
                },
                "entity": {
                  "type": "literal",
                  "children": {
                    "target": {
                      "type": "argument",
                      "parser": "minecraft:entity",
                      "properties": {
                        "amount": "single",
                        "type": "entities"
                      },
                      "children": {
                        "path": {
                          "type": "argument",
                          "parser": "minecraft:nbt_path",
                          "children": {
                            "byte": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "double": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "float": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "int": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "long": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "short": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "score": {
                  "type": "literal",
                  "children": {
                    "targets": {
                      "type": "argument",
                      "parser": "minecraft:score_holder",
                      "properties": {
                        "amount": "multiple"
                      },
                      "children": {
                        "objective": {
                          "type": "argument",
                          "parser": "minecraft:objective",
                          "redirect": [
                            "execute"
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "success": {
              "type": "literal",
              "children": {
                "block": {
                  "type": "literal",
                  "children": {
                    "targetPos": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "path": {
                          "type": "argument",
                          "parser": "minecraft:nbt_path",
                          "children": {
                            "byte": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "double": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "float": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "int": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "long": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "short": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "bossbar": {
                  "type": "literal",
                  "children": {
                    "id": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "children": {
                        "max": {
                          "type": "literal",
                          "redirect": [
                            "execute"
                          ]
                        },
                        "value": {
                          "type": "literal",
                          "redirect": [
                            "execute"
                          ]
                        }
                      }
                    }
                  }
                },
                "entity": {
                  "type": "literal",
                  "children": {
                    "target": {
                      "type": "argument",
                      "parser": "minecraft:entity",
                      "properties": {
                        "amount": "single",
                        "type": "entities"
                      },
                      "children": {
                        "path": {
                          "type": "argument",
                          "parser": "minecraft:nbt_path",
                          "children": {
                            "byte": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "double": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "float": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "int": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "long": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            },
                            "short": {
                              "type": "literal",
                              "children": {
                                "scale": {
                                  "type": "argument",
                                  "parser": "brigadier:double",
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "score": {
                  "type": "literal",
                  "children": {
                    "targets": {
                      "type": "argument",
                      "parser": "minecraft:score_holder",
                      "properties": {
                        "amount": "multiple"
                      },
                      "children": {
                        "objective": {
                          "type": "argument",
                          "parser": "minecraft:objective",
                          "redirect": [
                            "execute"
                          ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "unless": {
          "type": "literal",
          "children": {
            "block": {
              "type": "literal",
              "children": {
                "pos": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "block": {
                      "type": "argument",
                      "parser": "minecraft:block_predicate",
                      "executable": true,
                      "redirect": [
                        "execute"
                      ]
                    }
                  }
                }
              }
            },
            "blocks": {
              "type": "literal",
              "children": {
                "start": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "end": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "destination": {
                          "type": "argument",
                          "parser": "minecraft:block_pos",
                          "children": {
                            "all": {
                              "type": "literal",
                              "executable": true,
                              "redirect": [
                                "execute"
                              ]
                            },
                            "masked": {
                              "type": "literal",
                              "executable": true,
                              "redirect": [
                                "execute"
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "data": {
              "type": "literal",
              "children": {
                "block": {
                  "type": "literal",
                  "children": {
                    "sourcePos": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "path": {
                          "type": "argument",
                          "parser": "minecraft:nbt_path",
                          "executable": true,
                          "redirect": [
                            "execute"
                          ]
                        }
                      }
                    }
                  }
                },
                "entity": {
                  "type": "literal",
                  "children": {
                    "source": {
                      "type": "argument",
                      "parser": "minecraft:entity",
                      "properties": {
                        "amount": "single",
                        "type": "entities"
                      },
                      "children": {
                        "path": {
                          "type": "argument",
                          "parser": "minecraft:nbt_path",
                          "executable": true,
                          "redirect": [
                            "execute"
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "entity": {
              "type": "literal",
              "children": {
                "entities": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "entities"
                  },
                  "executable": true,
                  "redirect": [
                    "execute"
                  ]
                }
              }
            },
            "score": {
              "type": "literal",
              "children": {
                "target": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "single"
                  },
                  "children": {
                    "targetObjective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "children": {
                        "<": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "<=": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "=": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        ">": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        ">=": {
                          "type": "literal",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "single"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true,
                                  "redirect": [
                                    "execute"
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "matches": {
                          "type": "literal",
                          "children": {
                            "range": {
                              "type": "argument",
                              "parser": "minecraft:int_range",
                              "executable": true,
                              "redirect": [
                                "execute"
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "experience": {
      "type": "literal",
      "children": {
        "add": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "children": {
                "amount": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "children": {
                    "levels": {
                      "type": "literal",
                      "executable": true
                    },
                    "points": {
                      "type": "literal",
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            }
          }
        },
        "query": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "single",
                "type": "players"
              },
              "children": {
                "levels": {
                  "type": "literal",
                  "executable": true
                },
                "points": {
                  "type": "literal",
                  "executable": true
                }
              }
            }
          }
        },
        "set": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "children": {
                "amount": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 0
                  },
                  "children": {
                    "levels": {
                      "type": "literal",
                      "executable": true
                    },
                    "points": {
                      "type": "literal",
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "fill": {
      "type": "literal",
      "children": {
        "from": {
          "type": "argument",
          "parser": "minecraft:block_pos",
          "children": {
            "to": {
              "type": "argument",
              "parser": "minecraft:block_pos",
              "children": {
                "block": {
                  "type": "argument",
                  "parser": "minecraft:block_state",
                  "children": {
                    "destroy": {
                      "type": "literal",
                      "executable": true
                    },
                    "hollow": {
                      "type": "literal",
                      "executable": true
                    },
                    "keep": {
                      "type": "literal",
                      "executable": true
                    },
                    "outline": {
                      "type": "literal",
                      "executable": true
                    },
                    "replace": {
                      "type": "literal",
                      "children": {
                        "filter": {
                          "type": "argument",
                          "parser": "minecraft:block_predicate",
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "forceload": {
      "type": "literal",
      "children": {
        "add": {
          "type": "literal",
          "children": {
            "from": {
              "type": "argument",
              "parser": "minecraft:column_pos",
              "children": {
                "to": {
                  "type": "argument",
                  "parser": "minecraft:column_pos",
                  "executable": true
                }
              },
              "executable": true
            }
          }
        },
        "query": {
          "type": "literal",
          "children": {
            "pos": {
              "type": "argument",
              "parser": "minecraft:column_pos",
              "executable": true
            }
          },
          "executable": true
        },
        "remove": {
          "type": "literal",
          "children": {
            "all": {
              "type": "literal",
              "executable": true
            },
            "from": {
              "type": "argument",
              "parser": "minecraft:column_pos",
              "children": {
                "to": {
                  "type": "argument",
                  "parser": "minecraft:column_pos",
                  "executable": true
                }
              },
              "executable": true
            }
          }
        }
      }
    },
    "function": {
      "type": "literal",
      "children": {
        "name": {
          "type": "argument",
          "parser": "minecraft:function",
          "executable": true
        }
      }
    },
    "gamemode": {
      "type": "literal",
      "children": {
        "adventure": {
          "type": "literal",
          "children": {
            "target": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "executable": true
            }
          },
          "executable": true
        },
        "creative": {
          "type": "literal",
          "children": {
            "target": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "executable": true
            }
          },
          "executable": true
        },
        "spectator": {
          "type": "literal",
          "children": {
            "target": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "executable": true
            }
          },
          "executable": true
        },
        "survival": {
          "type": "literal",
          "children": {
            "target": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "gamerule": {
      "type": "literal",
      "children": {
        "announceAdvancements": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "commandBlockOutput": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "disableElytraMovementCheck": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "doDaylightCycle": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "doEntityDrops": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "doFireTick": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "doLimitedCrafting": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "doMobLoot": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "doMobSpawning": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "doTileDrops": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "doWeatherCycle": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "keepInventory": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "logAdminCommands": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "maxCommandChainLength": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:integer",
              "executable": true
            }
          },
          "executable": true
        },
        "maxEntityCramming": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:integer",
              "executable": true
            }
          },
          "executable": true
        },
        "mobGriefing": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "naturalRegeneration": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "randomTickSpeed": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:integer",
              "executable": true
            }
          },
          "executable": true
        },
        "reducedDebugInfo": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "sendCommandFeedback": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "showDeathMessages": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        },
        "spawnRadius": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:integer",
              "executable": true
            }
          },
          "executable": true
        },
        "spectatorsGenerateChunks": {
          "type": "literal",
          "children": {
            "value": {
              "type": "argument",
              "parser": "brigadier:bool",
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "give": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "players"
          },
          "children": {
            "item": {
              "type": "argument",
              "parser": "minecraft:item_stack",
              "children": {
                "count": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 1
                  },
                  "executable": true
                }
              },
              "executable": true
            }
          }
        }
      }
    },
    "help": {
      "type": "literal",
      "children": {
        "command": {
          "type": "argument",
          "parser": "brigadier:string",
          "properties": {
            "type": "greedy"
          },
          "executable": true
        }
      },
      "executable": true
    },
    "kick": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "players"
          },
          "children": {
            "reason": {
              "type": "argument",
              "parser": "minecraft:message",
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "kill": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "entities"
          },
          "executable": true
        }
      }
    },
    "list": {
      "type": "literal",
      "children": {
        "uuids": {
          "type": "literal",
          "executable": true
        }
      },
      "executable": true
    },
    "locate": {
      "type": "literal",
      "children": {
        "Buried_Treasure": {
          "type": "literal",
          "executable": true
        },
        "Desert_Pyramid": {
          "type": "literal",
          "executable": true
        },
        "EndCity": {
          "type": "literal",
          "executable": true
        },
        "Fortress": {
          "type": "literal",
          "executable": true
        },
        "Igloo": {
          "type": "literal",
          "executable": true
        },
        "Jungle_Pyramid": {
          "type": "literal",
          "executable": true
        },
        "Mansion": {
          "type": "literal",
          "executable": true
        },
        "Mineshaft": {
          "type": "literal",
          "executable": true
        },
        "Monument": {
          "type": "literal",
          "executable": true
        },
        "Ocean_Ruin": {
          "type": "literal",
          "executable": true
        },
        "Pillager_Outpost": {
          "type": "literal",
          "executable": true
        },
        "Shipwreck": {
          "type": "literal",
          "executable": true
        },
        "Stronghold": {
          "type": "literal",
          "executable": true
        },
        "Swamp_Hut": {
          "type": "literal",
          "executable": true
        },
        "Village": {
          "type": "literal",
          "executable": true
        }
      }
    },
    "loot": {
      "type": "literal",
      "children": {
        "give": {
          "type": "literal",
          "children": {
            "players": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "children": {
                "fish": {
                  "type": "literal",
                  "children": {
                    "loot_table": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "children": {
                        "pos": {
                          "type": "argument",
                          "parser": "minecraft:block_pos",
                          "children": {
                            "mainhand": {
                              "type": "literal",
                              "executable": true
                            },
                            "offhand": {
                              "type": "literal",
                              "executable": true
                            },
                            "tool": {
                              "type": "argument",
                              "parser": "minecraft:item_stack",
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      }
                    }
                  }
                },
                "kill": {
                  "type": "literal",
                  "children": {
                    "target": {
                      "type": "argument",
                      "parser": "minecraft:entity",
                      "properties": {
                        "amount": "single",
                        "type": "entities"
                      },
                      "executable": true
                    }
                  }
                },
                "loot": {
                  "type": "literal",
                  "children": {
                    "loot_table": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                },
                "mine": {
                  "type": "literal",
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "mainhand": {
                          "type": "literal",
                          "executable": true
                        },
                        "offhand": {
                          "type": "literal",
                          "executable": true
                        },
                        "tool": {
                          "type": "argument",
                          "parser": "minecraft:item_stack",
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        },
        "insert": {
          "type": "literal",
          "children": {
            "targetPos": {
              "type": "argument",
              "parser": "minecraft:block_pos",
              "children": {
                "fish": {
                  "type": "literal",
                  "children": {
                    "loot_table": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "children": {
                        "pos": {
                          "type": "argument",
                          "parser": "minecraft:block_pos",
                          "children": {
                            "mainhand": {
                              "type": "literal",
                              "executable": true
                            },
                            "offhand": {
                              "type": "literal",
                              "executable": true
                            },
                            "tool": {
                              "type": "argument",
                              "parser": "minecraft:item_stack",
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      }
                    }
                  }
                },
                "kill": {
                  "type": "literal",
                  "children": {
                    "target": {
                      "type": "argument",
                      "parser": "minecraft:entity",
                      "properties": {
                        "amount": "single",
                        "type": "entities"
                      },
                      "executable": true
                    }
                  }
                },
                "loot": {
                  "type": "literal",
                  "children": {
                    "loot_table": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                },
                "mine": {
                  "type": "literal",
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "mainhand": {
                          "type": "literal",
                          "executable": true
                        },
                        "offhand": {
                          "type": "literal",
                          "executable": true
                        },
                        "tool": {
                          "type": "argument",
                          "parser": "minecraft:item_stack",
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        },
        "replace": {
          "type": "literal",
          "children": {
            "block": {
              "type": "literal",
              "children": {
                "targetPos": {
                  "type": "argument",
                  "parser": "minecraft:block_pos",
                  "children": {
                    "slot": {
                      "type": "argument",
                      "parser": "minecraft:item_slot",
                      "children": {
                        "fish": {
                          "type": "literal",
                          "children": {
                            "loot_table": {
                              "type": "argument",
                              "parser": "minecraft:resource_location",
                              "children": {
                                "pos": {
                                  "type": "argument",
                                  "parser": "minecraft:block_pos",
                                  "children": {
                                    "mainhand": {
                                      "type": "literal",
                                      "executable": true
                                    },
                                    "offhand": {
                                      "type": "literal",
                                      "executable": true
                                    },
                                    "tool": {
                                      "type": "argument",
                                      "parser": "minecraft:item_stack",
                                      "executable": true
                                    }
                                  },
                                  "executable": true
                                }
                              }
                            }
                          }
                        },
                        "kill": {
                          "type": "literal",
                          "children": {
                            "target": {
                              "type": "argument",
                              "parser": "minecraft:entity",
                              "properties": {
                                "amount": "single",
                                "type": "entities"
                              },
                              "executable": true
                            }
                          }
                        },
                        "loot": {
                          "type": "literal",
                          "children": {
                            "loot_table": {
                              "type": "argument",
                              "parser": "minecraft:resource_location",
                              "executable": true
                            }
                          }
                        },
                        "mine": {
                          "type": "literal",
                          "children": {
                            "pos": {
                              "type": "argument",
                              "parser": "minecraft:block_pos",
                              "children": {
                                "mainhand": {
                                  "type": "literal",
                                  "executable": true
                                },
                                "offhand": {
                                  "type": "literal",
                                  "executable": true
                                },
                                "tool": {
                                  "type": "argument",
                                  "parser": "minecraft:item_stack",
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          }
                        },
                        "count": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 0
                          },
                          "children": {
                            "fish": {
                              "type": "literal",
                              "children": {
                                "loot_table": {
                                  "type": "argument",
                                  "parser": "minecraft:resource_location",
                                  "children": {
                                    "pos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "mainhand": {
                                          "type": "literal",
                                          "executable": true
                                        },
                                        "offhand": {
                                          "type": "literal",
                                          "executable": true
                                        },
                                        "tool": {
                                          "type": "argument",
                                          "parser": "minecraft:item_stack",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "kill": {
                              "type": "literal",
                              "children": {
                                "target": {
                                  "type": "argument",
                                  "parser": "minecraft:entity",
                                  "properties": {
                                    "amount": "single",
                                    "type": "entities"
                                  },
                                  "executable": true
                                }
                              }
                            },
                            "loot": {
                              "type": "literal",
                              "children": {
                                "loot_table": {
                                  "type": "argument",
                                  "parser": "minecraft:resource_location",
                                  "executable": true
                                }
                              }
                            },
                            "mine": {
                              "type": "literal",
                              "children": {
                                "pos": {
                                  "type": "argument",
                                  "parser": "minecraft:block_pos",
                                  "children": {
                                    "mainhand": {
                                      "type": "literal",
                                      "executable": true
                                    },
                                    "offhand": {
                                      "type": "literal",
                                      "executable": true
                                    },
                                    "tool": {
                                      "type": "argument",
                                      "parser": "minecraft:item_stack",
                                      "executable": true
                                    }
                                  },
                                  "executable": true
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "entity": {
              "type": "literal",
              "children": {
                "entities": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "entities"
                  },
                  "children": {
                    "slot": {
                      "type": "argument",
                      "parser": "minecraft:item_slot",
                      "children": {
                        "fish": {
                          "type": "literal",
                          "children": {
                            "loot_table": {
                              "type": "argument",
                              "parser": "minecraft:resource_location",
                              "children": {
                                "pos": {
                                  "type": "argument",
                                  "parser": "minecraft:block_pos",
                                  "children": {
                                    "mainhand": {
                                      "type": "literal",
                                      "executable": true
                                    },
                                    "offhand": {
                                      "type": "literal",
                                      "executable": true
                                    },
                                    "tool": {
                                      "type": "argument",
                                      "parser": "minecraft:item_stack",
                                      "executable": true
                                    }
                                  },
                                  "executable": true
                                }
                              }
                            }
                          }
                        },
                        "kill": {
                          "type": "literal",
                          "children": {
                            "target": {
                              "type": "argument",
                              "parser": "minecraft:entity",
                              "properties": {
                                "amount": "single",
                                "type": "entities"
                              },
                              "executable": true
                            }
                          }
                        },
                        "loot": {
                          "type": "literal",
                          "children": {
                            "loot_table": {
                              "type": "argument",
                              "parser": "minecraft:resource_location",
                              "executable": true
                            }
                          }
                        },
                        "mine": {
                          "type": "literal",
                          "children": {
                            "pos": {
                              "type": "argument",
                              "parser": "minecraft:block_pos",
                              "children": {
                                "mainhand": {
                                  "type": "literal",
                                  "executable": true
                                },
                                "offhand": {
                                  "type": "literal",
                                  "executable": true
                                },
                                "tool": {
                                  "type": "argument",
                                  "parser": "minecraft:item_stack",
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          }
                        },
                        "count": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 0
                          },
                          "children": {
                            "fish": {
                              "type": "literal",
                              "children": {
                                "loot_table": {
                                  "type": "argument",
                                  "parser": "minecraft:resource_location",
                                  "children": {
                                    "pos": {
                                      "type": "argument",
                                      "parser": "minecraft:block_pos",
                                      "children": {
                                        "mainhand": {
                                          "type": "literal",
                                          "executable": true
                                        },
                                        "offhand": {
                                          "type": "literal",
                                          "executable": true
                                        },
                                        "tool": {
                                          "type": "argument",
                                          "parser": "minecraft:item_stack",
                                          "executable": true
                                        }
                                      },
                                      "executable": true
                                    }
                                  }
                                }
                              }
                            },
                            "kill": {
                              "type": "literal",
                              "children": {
                                "target": {
                                  "type": "argument",
                                  "parser": "minecraft:entity",
                                  "properties": {
                                    "amount": "single",
                                    "type": "entities"
                                  },
                                  "executable": true
                                }
                              }
                            },
                            "loot": {
                              "type": "literal",
                              "children": {
                                "loot_table": {
                                  "type": "argument",
                                  "parser": "minecraft:resource_location",
                                  "executable": true
                                }
                              }
                            },
                            "mine": {
                              "type": "literal",
                              "children": {
                                "pos": {
                                  "type": "argument",
                                  "parser": "minecraft:block_pos",
                                  "children": {
                                    "mainhand": {
                                      "type": "literal",
                                      "executable": true
                                    },
                                    "offhand": {
                                      "type": "literal",
                                      "executable": true
                                    },
                                    "tool": {
                                      "type": "argument",
                                      "parser": "minecraft:item_stack",
                                      "executable": true
                                    }
                                  },
                                  "executable": true
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "spawn": {
          "type": "literal",
          "children": {
            "targetPos": {
              "type": "argument",
              "parser": "minecraft:vec3",
              "children": {
                "fish": {
                  "type": "literal",
                  "children": {
                    "loot_table": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "children": {
                        "pos": {
                          "type": "argument",
                          "parser": "minecraft:block_pos",
                          "children": {
                            "mainhand": {
                              "type": "literal",
                              "executable": true
                            },
                            "offhand": {
                              "type": "literal",
                              "executable": true
                            },
                            "tool": {
                              "type": "argument",
                              "parser": "minecraft:item_stack",
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      }
                    }
                  }
                },
                "kill": {
                  "type": "literal",
                  "children": {
                    "target": {
                      "type": "argument",
                      "parser": "minecraft:entity",
                      "properties": {
                        "amount": "single",
                        "type": "entities"
                      },
                      "executable": true
                    }
                  }
                },
                "loot": {
                  "type": "literal",
                  "children": {
                    "loot_table": {
                      "type": "argument",
                      "parser": "minecraft:resource_location",
                      "executable": true
                    }
                  }
                },
                "mine": {
                  "type": "literal",
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:block_pos",
                      "children": {
                        "mainhand": {
                          "type": "literal",
                          "executable": true
                        },
                        "offhand": {
                          "type": "literal",
                          "executable": true
                        },
                        "tool": {
                          "type": "argument",
                          "parser": "minecraft:item_stack",
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "me": {
      "type": "literal",
      "children": {
        "action": {
          "type": "argument",
          "parser": "brigadier:string",
          "properties": {
            "type": "greedy"
          },
          "executable": true
        }
      }
    },
    "msg": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "players"
          },
          "children": {
            "message": {
              "type": "argument",
              "parser": "minecraft:message",
              "executable": true
            }
          }
        }
      }
    },
    "op": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:game_profile",
          "executable": true
        }
      }
    },
    "pardon": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:game_profile",
          "executable": true
        }
      }
    },
    "pardon-ip": {
      "type": "literal",
      "children": {
        "target": {
          "type": "argument",
          "parser": "brigadier:string",
          "properties": {
            "type": "word"
          },
          "executable": true
        }
      }
    },
    "particle": {
      "type": "literal",
      "children": {
        "name": {
          "type": "argument",
          "parser": "minecraft:particle",
          "children": {
            "pos": {
              "type": "argument",
              "parser": "minecraft:vec3",
              "children": {
                "delta": {
                  "type": "argument",
                  "parser": "minecraft:vec3",
                  "children": {
                    "speed": {
                      "type": "argument",
                      "parser": "brigadier:float",
                      "properties": {
                        "min": 0.0
                      },
                      "children": {
                        "count": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 0
                          },
                          "children": {
                            "force": {
                              "type": "literal",
                              "children": {
                                "viewers": {
                                  "type": "argument",
                                  "parser": "minecraft:entity",
                                  "properties": {
                                    "amount": "multiple",
                                    "type": "players"
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            },
                            "normal": {
                              "type": "literal",
                              "children": {
                                "viewers": {
                                  "type": "argument",
                                  "parser": "minecraft:entity",
                                  "properties": {
                                    "amount": "multiple",
                                    "type": "players"
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      }
                    }
                  }
                }
              },
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "playsound": {
      "type": "literal",
      "children": {
        "sound": {
          "type": "argument",
          "parser": "minecraft:resource_location",
          "children": {
            "ambient": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "block": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "hostile": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "master": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "music": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "neutral": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "player": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "record": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "voice": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "weather": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:entity",
                  "properties": {
                    "amount": "multiple",
                    "type": "players"
                  },
                  "children": {
                    "pos": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "children": {
                        "volume": {
                          "type": "argument",
                          "parser": "brigadier:float",
                          "properties": {
                            "min": 0.0
                          },
                          "children": {
                            "pitch": {
                              "type": "argument",
                              "parser": "brigadier:float",
                              "properties": {
                                "min": 0.0,
                                "max": 2.0
                              },
                              "children": {
                                "minVolume": {
                                  "type": "argument",
                                  "parser": "brigadier:float",
                                  "properties": {
                                    "min": 0.0,
                                    "max": 1.0
                                  },
                                  "executable": true
                                }
                              },
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "publish": {
      "type": "literal",
      "children": {
        "port": {
          "type": "argument",
          "parser": "brigadier:integer",
          "properties": {
            "min": 0,
            "max": 65535
          },
          "executable": true
        }
      },
      "executable": true
    },
    "recipe": {
      "type": "literal",
      "children": {
        "give": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "children": {
                "*": {
                  "type": "literal",
                  "executable": true
                },
                "recipe": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              }
            }
          }
        },
        "take": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "players"
              },
              "children": {
                "*": {
                  "type": "literal",
                  "executable": true
                },
                "recipe": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "reload": {
      "type": "literal",
      "executable": true
    },
    "replaceitem": {
      "type": "literal",
      "children": {
        "block": {
          "type": "literal",
          "children": {
            "pos": {
              "type": "argument",
              "parser": "minecraft:block_pos",
              "children": {
                "slot": {
                  "type": "argument",
                  "parser": "minecraft:item_slot",
                  "children": {
                    "item": {
                      "type": "argument",
                      "parser": "minecraft:item_stack",
                      "children": {
                        "count": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 1,
                            "max": 64
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        },
        "entity": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "multiple",
                "type": "entities"
              },
              "children": {
                "slot": {
                  "type": "argument",
                  "parser": "minecraft:item_slot",
                  "children": {
                    "item": {
                      "type": "argument",
                      "parser": "minecraft:item_stack",
                      "children": {
                        "count": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 1,
                            "max": 64
                          },
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "save-all": {
      "type": "literal",
      "children": {
        "flush": {
          "type": "literal",
          "executable": true
        }
      },
      "executable": true
    },
    "save-off": {
      "type": "literal",
      "executable": true
    },
    "save-on": {
      "type": "literal",
      "executable": true
    },
    "say": {
      "type": "literal",
      "children": {
        "message": {
          "type": "argument",
          "parser": "minecraft:message",
          "executable": true
        }
      }
    },
    "schedule": {
      "type": "literal",
      "children": {
        "function": {
          "type": "literal",
          "children": {
            "function": {
              "type": "argument",
              "parser": "minecraft:function",
              "children": {
                "time": {
                  "type": "argument",
                  "parser": "minecraft:time",
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "scoreboard": {
      "type": "literal",
      "children": {
        "objectives": {
          "type": "literal",
          "children": {
            "add": {
              "type": "literal",
              "children": {
                "objective": {
                  "type": "argument",
                  "parser": "brigadier:string",
                  "properties": {
                    "type": "word"
                  },
                  "children": {
                    "criteria": {
                      "type": "argument",
                      "parser": "minecraft:objective_criteria",
                      "children": {
                        "displayName": {
                          "type": "argument",
                          "parser": "minecraft:component",
                          "executable": true
                        }
                      },
                      "executable": true
                    }
                  }
                }
              }
            },
            "list": {
              "type": "literal",
              "executable": true
            },
            "modify": {
              "type": "literal",
              "children": {
                "objective": {
                  "type": "argument",
                  "parser": "minecraft:objective",
                  "children": {
                    "displayname": {
                      "type": "literal",
                      "children": {
                        "displayName": {
                          "type": "argument",
                          "parser": "minecraft:component",
                          "executable": true
                        }
                      }
                    },
                    "rendertype": {
                      "type": "literal",
                      "children": {
                        "hearts": {
                          "type": "literal",
                          "executable": true
                        },
                        "integer": {
                          "type": "literal",
                          "executable": true
                        }
                      }
                    }
                  }
                }
              }
            },
            "remove": {
              "type": "literal",
              "children": {
                "objective": {
                  "type": "argument",
                  "parser": "minecraft:objective",
                  "executable": true
                }
              }
            },
            "setdisplay": {
              "type": "literal",
              "children": {
                "slot": {
                  "type": "argument",
                  "parser": "minecraft:scoreboard_slot",
                  "children": {
                    "objective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            }
          }
        },
        "players": {
          "type": "literal",
          "children": {
            "add": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "multiple"
                  },
                  "children": {
                    "objective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "children": {
                        "score": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 0
                          },
                          "executable": true
                        }
                      }
                    }
                  }
                }
              }
            },
            "enable": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "multiple"
                  },
                  "children": {
                    "objective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "executable": true
                    }
                  }
                }
              }
            },
            "get": {
              "type": "literal",
              "children": {
                "target": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "single"
                  },
                  "children": {
                    "objective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "executable": true
                    }
                  }
                }
              }
            },
            "list": {
              "type": "literal",
              "children": {
                "target": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "single"
                  },
                  "executable": true
                }
              },
              "executable": true
            },
            "operation": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "multiple"
                  },
                  "children": {
                    "targetObjective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "children": {
                        "operation": {
                          "type": "argument",
                          "parser": "minecraft:operation",
                          "children": {
                            "source": {
                              "type": "argument",
                              "parser": "minecraft:score_holder",
                              "properties": {
                                "amount": "multiple"
                              },
                              "children": {
                                "sourceObjective": {
                                  "type": "argument",
                                  "parser": "minecraft:objective",
                                  "executable": true
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "remove": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "multiple"
                  },
                  "children": {
                    "objective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "children": {
                        "score": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 0
                          },
                          "executable": true
                        }
                      }
                    }
                  }
                }
              }
            },
            "reset": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "multiple"
                  },
                  "children": {
                    "objective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "executable": true
                    }
                  },
                  "executable": true
                }
              }
            },
            "set": {
              "type": "literal",
              "children": {
                "targets": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "multiple"
                  },
                  "children": {
                    "objective": {
                      "type": "argument",
                      "parser": "minecraft:objective",
                      "children": {
                        "score": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "executable": true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "seed": {
      "type": "literal",
      "executable": true
    },
    "setblock": {
      "type": "literal",
      "children": {
        "pos": {
          "type": "argument",
          "parser": "minecraft:block_pos",
          "children": {
            "block": {
              "type": "argument",
              "parser": "minecraft:block_state",
              "children": {
                "destroy": {
                  "type": "literal",
                  "executable": true
                },
                "keep": {
                  "type": "literal",
                  "executable": true
                },
                "replace": {
                  "type": "literal",
                  "executable": true
                }
              },
              "executable": true
            }
          }
        }
      }
    },
    "setidletimeout": {
      "type": "literal",
      "children": {
        "minutes": {
          "type": "argument",
          "parser": "brigadier:integer",
          "properties": {
            "min": 0
          },
          "executable": true
        }
      }
    },
    "setworldspawn": {
      "type": "literal",
      "children": {
        "pos": {
          "type": "argument",
          "parser": "minecraft:block_pos",
          "executable": true
        }
      },
      "executable": true
    },
    "spawnpoint": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "players"
          },
          "children": {
            "pos": {
              "type": "argument",
              "parser": "minecraft:block_pos",
              "executable": true
            }
          },
          "executable": true
        }
      },
      "executable": true
    },
    "spreadplayers": {
      "type": "literal",
      "children": {
        "center": {
          "type": "argument",
          "parser": "minecraft:vec2",
          "children": {
            "spreadDistance": {
              "type": "argument",
              "parser": "brigadier:float",
              "properties": {
                "min": 0.0
              },
              "children": {
                "maxRange": {
                  "type": "argument",
                  "parser": "brigadier:float",
                  "properties": {
                    "min": 1.0
                  },
                  "children": {
                    "respectTeams": {
                      "type": "argument",
                      "parser": "brigadier:bool",
                      "children": {
                        "targets": {
                          "type": "argument",
                          "parser": "minecraft:entity",
                          "properties": {
                            "amount": "multiple",
                            "type": "entities"
                          },
                          "executable": true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "stop": {
      "type": "literal",
      "executable": true
    },
    "stopsound": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "players"
          },
          "children": {
            "*": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              }
            },
            "ambient": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "block": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "hostile": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "master": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "music": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "neutral": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "player": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "record": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "voice": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            },
            "weather": {
              "type": "literal",
              "children": {
                "sound": {
                  "type": "argument",
                  "parser": "minecraft:resource_location",
                  "executable": true
                }
              },
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "summon": {
      "type": "literal",
      "children": {
        "entity": {
          "type": "argument",
          "parser": "minecraft:entity_summon",
          "children": {
            "pos": {
              "type": "argument",
              "parser": "minecraft:vec3",
              "children": {
                "nbt": {
                  "type": "argument",
                  "parser": "minecraft:nbt_compound_tag",
                  "executable": true
                }
              },
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "tag": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "entities"
          },
          "children": {
            "add": {
              "type": "literal",
              "children": {
                "name": {
                  "type": "argument",
                  "parser": "brigadier:string",
                  "properties": {
                    "type": "word"
                  },
                  "executable": true
                }
              }
            },
            "list": {
              "type": "literal",
              "executable": true
            },
            "remove": {
              "type": "literal",
              "children": {
                "name": {
                  "type": "argument",
                  "parser": "brigadier:string",
                  "properties": {
                    "type": "word"
                  },
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "team": {
      "type": "literal",
      "children": {
        "add": {
          "type": "literal",
          "children": {
            "team": {
              "type": "argument",
              "parser": "brigadier:string",
              "properties": {
                "type": "word"
              },
              "children": {
                "displayName": {
                  "type": "argument",
                  "parser": "minecraft:component",
                  "executable": true
                }
              },
              "executable": true
            }
          }
        },
        "empty": {
          "type": "literal",
          "children": {
            "team": {
              "type": "argument",
              "parser": "minecraft:team",
              "executable": true
            }
          }
        },
        "join": {
          "type": "literal",
          "children": {
            "team": {
              "type": "argument",
              "parser": "minecraft:team",
              "children": {
                "members": {
                  "type": "argument",
                  "parser": "minecraft:score_holder",
                  "properties": {
                    "amount": "multiple"
                  },
                  "executable": true
                }
              },
              "executable": true
            }
          }
        },
        "leave": {
          "type": "literal",
          "children": {
            "members": {
              "type": "argument",
              "parser": "minecraft:score_holder",
              "properties": {
                "amount": "multiple"
              },
              "executable": true
            }
          }
        },
        "list": {
          "type": "literal",
          "children": {
            "team": {
              "type": "argument",
              "parser": "minecraft:team",
              "executable": true
            }
          },
          "executable": true
        },
        "modify": {
          "type": "literal",
          "children": {
            "team": {
              "type": "argument",
              "parser": "minecraft:team",
              "children": {
                "collisionRule": {
                  "type": "literal",
                  "children": {
                    "always": {
                      "type": "literal",
                      "executable": true
                    },
                    "never": {
                      "type": "literal",
                      "executable": true
                    },
                    "pushOtherTeams": {
                      "type": "literal",
                      "executable": true
                    },
                    "pushOwnTeam": {
                      "type": "literal",
                      "executable": true
                    }
                  }
                },
                "color": {
                  "type": "literal",
                  "children": {
                    "value": {
                      "type": "argument",
                      "parser": "minecraft:color",
                      "executable": true
                    }
                  }
                },
                "deathMessageVisibility": {
                  "type": "literal",
                  "children": {
                    "always": {
                      "type": "literal",
                      "executable": true
                    },
                    "hideForOtherTeams": {
                      "type": "literal",
                      "executable": true
                    },
                    "hideForOwnTeam": {
                      "type": "literal",
                      "executable": true
                    },
                    "never": {
                      "type": "literal",
                      "executable": true
                    }
                  }
                },
                "displayName": {
                  "type": "literal",
                  "children": {
                    "displayName": {
                      "type": "argument",
                      "parser": "minecraft:component",
                      "executable": true
                    }
                  }
                },
                "friendlyFire": {
                  "type": "literal",
                  "children": {
                    "allowed": {
                      "type": "argument",
                      "parser": "brigadier:bool",
                      "executable": true
                    }
                  }
                },
                "nametagVisibility": {
                  "type": "literal",
                  "children": {
                    "always": {
                      "type": "literal",
                      "executable": true
                    },
                    "hideForOtherTeams": {
                      "type": "literal",
                      "executable": true
                    },
                    "hideForOwnTeam": {
                      "type": "literal",
                      "executable": true
                    },
                    "never": {
                      "type": "literal",
                      "executable": true
                    }
                  }
                },
                "prefix": {
                  "type": "literal",
                  "children": {
                    "prefix": {
                      "type": "argument",
                      "parser": "minecraft:component",
                      "executable": true
                    }
                  }
                },
                "seeFriendlyInvisibles": {
                  "type": "literal",
                  "children": {
                    "allowed": {
                      "type": "argument",
                      "parser": "brigadier:bool",
                      "executable": true
                    }
                  }
                },
                "suffix": {
                  "type": "literal",
                  "children": {
                    "suffix": {
                      "type": "argument",
                      "parser": "minecraft:component",
                      "executable": true
                    }
                  }
                }
              }
            }
          }
        },
        "remove": {
          "type": "literal",
          "children": {
            "team": {
              "type": "argument",
              "parser": "minecraft:team",
              "executable": true
            }
          }
        }
      }
    },
    "teammsg": {
      "type": "literal",
      "children": {
        "message": {
          "type": "argument",
          "parser": "minecraft:message",
          "executable": true
        }
      }
    },
    "teleport": {
      "type": "literal",
      "children": {
        "destination": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "single",
            "type": "entities"
          },
          "executable": true
        },
        "location": {
          "type": "argument",
          "parser": "minecraft:vec3",
          "executable": true
        },
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "entities"
          },
          "children": {
            "destination": {
              "type": "argument",
              "parser": "minecraft:entity",
              "properties": {
                "amount": "single",
                "type": "entities"
              },
              "executable": true
            },
            "location": {
              "type": "argument",
              "parser": "minecraft:vec3",
              "children": {
                "facing": {
                  "type": "literal",
                  "children": {
                    "entity": {
                      "type": "literal",
                      "children": {
                        "facingEntity": {
                          "type": "argument",
                          "parser": "minecraft:entity",
                          "properties": {
                            "amount": "single",
                            "type": "entities"
                          },
                          "children": {
                            "facingAnchor": {
                              "type": "argument",
                              "parser": "minecraft:entity_anchor",
                              "executable": true
                            }
                          },
                          "executable": true
                        }
                      }
                    },
                    "facingLocation": {
                      "type": "argument",
                      "parser": "minecraft:vec3",
                      "executable": true
                    }
                  }
                },
                "rotation": {
                  "type": "argument",
                  "parser": "minecraft:rotation",
                  "executable": true
                }
              },
              "executable": true
            }
          }
        }
      }
    },
    "tell": {
      "type": "literal",
      "redirect": [
        "msg"
      ]
    },
    "tellraw": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "players"
          },
          "children": {
            "message": {
              "type": "argument",
              "parser": "minecraft:component",
              "executable": true
            }
          }
        }
      }
    },
    "time": {
      "type": "literal",
      "children": {
        "add": {
          "type": "literal",
          "children": {
            "time": {
              "type": "argument",
              "parser": "minecraft:time",
              "executable": true
            }
          }
        },
        "query": {
          "type": "literal",
          "children": {
            "day": {
              "type": "literal",
              "executable": true
            },
            "daytime": {
              "type": "literal",
              "executable": true
            },
            "gametime": {
              "type": "literal",
              "executable": true
            }
          }
        },
        "set": {
          "type": "literal",
          "children": {
            "day": {
              "type": "literal",
              "executable": true
            },
            "midnight": {
              "type": "literal",
              "executable": true
            },
            "night": {
              "type": "literal",
              "executable": true
            },
            "noon": {
              "type": "literal",
              "executable": true
            },
            "time": {
              "type": "argument",
              "parser": "minecraft:time",
              "executable": true
            }
          }
        }
      }
    },
    "title": {
      "type": "literal",
      "children": {
        "targets": {
          "type": "argument",
          "parser": "minecraft:entity",
          "properties": {
            "amount": "multiple",
            "type": "players"
          },
          "children": {
            "actionbar": {
              "type": "literal",
              "children": {
                "title": {
                  "type": "argument",
                  "parser": "minecraft:component",
                  "executable": true
                }
              }
            },
            "clear": {
              "type": "literal",
              "executable": true
            },
            "reset": {
              "type": "literal",
              "executable": true
            },
            "subtitle": {
              "type": "literal",
              "children": {
                "title": {
                  "type": "argument",
                  "parser": "minecraft:component",
                  "executable": true
                }
              }
            },
            "times": {
              "type": "literal",
              "children": {
                "fadeIn": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 0
                  },
                  "children": {
                    "stay": {
                      "type": "argument",
                      "parser": "brigadier:integer",
                      "properties": {
                        "min": 0
                      },
                      "children": {
                        "fadeOut": {
                          "type": "argument",
                          "parser": "brigadier:integer",
                          "properties": {
                            "min": 0
                          },
                          "executable": true
                        }
                      }
                    }
                  }
                }
              }
            },
            "title": {
              "type": "literal",
              "children": {
                "title": {
                  "type": "argument",
                  "parser": "minecraft:component",
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "tm": {
      "type": "literal",
      "redirect": [
        "teammsg"
      ]
    },
    "tp": {
      "type": "literal",
      "redirect": [
        "teleport"
      ]
    },
    "trigger": {
      "type": "literal",
      "children": {
        "objective": {
          "type": "argument",
          "parser": "minecraft:objective",
          "children": {
            "add": {
              "type": "literal",
              "children": {
                "value": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "executable": true
                }
              }
            },
            "set": {
              "type": "literal",
              "children": {
                "value": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "executable": true
                }
              }
            }
          },
          "executable": true
        }
      }
    },
    "w": {
      "type": "literal",
      "redirect": [
        "msg"
      ]
    },
    "weather": {
      "type": "literal",
      "children": {
        "clear": {
          "type": "literal",
          "children": {
            "duration": {
              "type": "argument",
              "parser": "brigadier:integer",
              "properties": {
                "min": 0,
                "max": 1000000
              },
              "executable": true
            }
          },
          "executable": true
        },
        "rain": {
          "type": "literal",
          "children": {
            "duration": {
              "type": "argument",
              "parser": "brigadier:integer",
              "properties": {
                "min": 0,
                "max": 1000000
              },
              "executable": true
            }
          },
          "executable": true
        },
        "thunder": {
          "type": "literal",
          "children": {
            "duration": {
              "type": "argument",
              "parser": "brigadier:integer",
              "properties": {
                "min": 0,
                "max": 1000000
              },
              "executable": true
            }
          },
          "executable": true
        }
      }
    },
    "whitelist": {
      "type": "literal",
      "children": {
        "add": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:game_profile",
              "executable": true
            }
          }
        },
        "list": {
          "type": "literal",
          "executable": true
        },
        "off": {
          "type": "literal",
          "executable": true
        },
        "on": {
          "type": "literal",
          "executable": true
        },
        "reload": {
          "type": "literal",
          "executable": true
        },
        "remove": {
          "type": "literal",
          "children": {
            "targets": {
              "type": "argument",
              "parser": "minecraft:game_profile",
              "executable": true
            }
          }
        }
      }
    },
    "worldborder": {
      "type": "literal",
      "children": {
        "add": {
          "type": "literal",
          "children": {
            "distance": {
              "type": "argument",
              "parser": "brigadier:float",
              "properties": {
                "min": -6.0E7,
                "max": 6.0E7
              },
              "children": {
                "time": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 0
                  },
                  "executable": true
                }
              },
              "executable": true
            }
          }
        },
        "center": {
          "type": "literal",
          "children": {
            "pos": {
              "type": "argument",
              "parser": "minecraft:vec2",
              "executable": true
            }
          }
        },
        "damage": {
          "type": "literal",
          "children": {
            "amount": {
              "type": "literal",
              "children": {
                "damagePerBlock": {
                  "type": "argument",
                  "parser": "brigadier:float",
                  "properties": {
                    "min": 0.0
                  },
                  "executable": true
                }
              }
            },
            "buffer": {
              "type": "literal",
              "children": {
                "distance": {
                  "type": "argument",
                  "parser": "brigadier:float",
                  "properties": {
                    "min": 0.0
                  },
                  "executable": true
                }
              }
            }
          }
        },
        "get": {
          "type": "literal",
          "executable": true
        },
        "set": {
          "type": "literal",
          "children": {
            "distance": {
              "type": "argument",
              "parser": "brigadier:float",
              "properties": {
                "min": -6.0E7,
                "max": 6.0E7
              },
              "children": {
                "time": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 0
                  },
                  "executable": true
                }
              },
              "executable": true
            }
          }
        },
        "warning": {
          "type": "literal",
          "children": {
            "distance": {
              "type": "literal",
              "children": {
                "distance": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 0
                  },
                  "executable": true
                }
              }
            },
            "time": {
              "type": "literal",
              "children": {
                "time": {
                  "type": "argument",
                  "parser": "brigadier:integer",
                  "properties": {
                    "min": 0
                  },
                  "executable": true
                }
              }
            }
          }
        }
      }
    },
    "xp": {
      "type": "literal",
      "redirect": [
        "experience"
      ]
    }
  }
}