module.exports = function solveSudoku(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0) {
                let possibleNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

                for(let k = 0; k < matrix[i].length; k++) {
                    for(let a = 0; a < possibleNums.length; a++) {
                        if (matrix[i][k] == possibleNums[a]) {
                            possibleNums.splice(a, 1);
                        }
                    }
                }

                for(let k = 0; k < matrix[i][j].length; k++) {
                    for(let a = 0; a < possibleNums.length; a++) {
                        if (matrix[k][j] == possibleNums[a]) {
                            possibleNums.splice(a, 1);
                        }
                    }
                }

                if(i < 3) {
                    if(j < 3) {
                        for (let r = 0; r < 3; r++) {
                            for (let c = 0; c < 3; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    } else if(j < 6) {
                        for (let r = 0; r < 3; r++) {
                            for (let c = 3; c < 6; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    } else {
                        for (let r = 0; r < 3; r++) {
                            for (let c = 6; c < 9; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    }
                } else if(i < 6) {
                    if(j < 3) {
                        for (let r = 3; r < 6; r++) {
                            for (let c = 0; c < 3; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    } else if(j < 6) {
                        for (let r = 3; r < 6; r++) {
                            for (let c = 3; c < 6; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    } else {
                        for (let r = 3; r < 6; r++) {
                            for (let c = 6; c < 9; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if(j < 3) {
                        for (let r = 6; r < 9; r++) {
                            for (let c = 0; c < 3; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    } else if(j < 6) {
                        for (let r = 6; r < 9; r++) {
                            for (let c = 3; c < 6; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    } else {
                        for (let r = 6; r < 9; r++) {
                            for (let c = 6; c < 9; c++) {
                                for(let p = 0; p < possibleNums.length; p++) {
                                    if (matrix[r][c] == possibleNums[p]) {
                                        possibleNums.splice(p, 1);
                                    }
                                }
                            }
                        }
                    }
                }

                if (possibleNums.length == 1) {
                    matrix[i][j] = possibleNums[0];
                } else {
                    matrix[i][j] = possibleNums;
                }
            }
        }
    }

    return matrix;
}
