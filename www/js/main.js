var app = angular.module('finanzas', []);
app.controller('controller', function ($scope) {
    if (typeof (Storage) !== "undefined") {
        if (isNaN(localStorage.total)) {
            localStorage.total = 0;
        }
        var a = localStorage.total;
        $scope.total = a;

        if (isNaN(localStorage.totalLunes)) {
            localStorage.totalLunes = 0;
        }
        var b = localStorage.totalLunes;
        $scope.totalLunes = b;

        if (isNaN(localStorage.totalMartes)) {
            localStorage.totalMartes = 0;
        }
        var c = localStorage.totalMartes;
        $scope.totalMartes = c;

        if (isNaN(localStorage.totalMiercoles)) {
            localStorage.totalMiercoles = 0;
        }
        var d = localStorage.totalMiercoles;
        $scope.totalMiercoles = d;

        if (isNaN(localStorage.totalJueves)) {
            localStorage.totalJueves = 0;
        }
        var e = localStorage.totalJueves;
        $scope.totalJueves = e;

        if (isNaN(localStorage.totalViernes)) {
            localStorage.totalViernes = 0;
        }
        var f = localStorage.totalViernes;
        $scope.totalViernes = f;

        if (isNaN(localStorage.totalSabado)) {
            localStorage.totalSabado = 0;
        }
        var g = localStorage.totalSabado;
        $scope.totalSabado = g;

        if (isNaN(localStorage.totalDomingo)) {
            localStorage.totalDomingo = 0;
        }
        var h = localStorage.totalDomingo;
        $scope.totalDomingo = h;

        if (isNaN(localStorage.totalSemanaAnt)) {
            localStorage.totalSemanaAnt = 0;
        }
        var i = localStorage.totalSemanaAnt;
        $scope.totalSemanaAnt = i;

        if (isNaN(localStorage.totalMes)) {
            localStorage.totalMes = 0;
        }
        var j = localStorage.totalMes;
        $scope.totalMes = j;

        //
        if (isNaN(localStorage.sueldo)) {
            localStorage.sueldo = 0;
        }
        var k = localStorage.sueldo;
        $scope.sueldo = k;

        if (isNaN(localStorage.ahorro)) {
            localStorage.ahorro = 0;
        }
        var l = localStorage.ahorro;
        $scope.ahorro = l;

        if (isNaN(localStorage.gastoMensual)) {
            localStorage.gastoMensual = 0;
        }
        var x = localStorage.gastoMensual;
        $scope.gastoMensual = x;
        
        if (isNaN(localStorage.viaje)) {
            localStorage.viaje = 0;
        }
        var z = localStorage.viaje;
        $scope.viaje = z;

        if (isNaN(localStorage.gFijos)) {
            localStorage.gFijos = 0;
        }
        var yy = localStorage.gFijos;
        $scope.gFijos=yy;
        if (isNaN(localStorage.tarjetas)) {
            localStorage.tarjetas = 0;
        }
        var zz = localStorage.tarjetas;
        $scope.tarjetas=zz;

        $scope.savings =$scope.ahorro/100 *($scope.sueldo);


    }
    $scope.resetWeek = function () {

        {$('#confirmModal').modal('hide');
            localStorage.totalSemanaAnt = localStorage.total;
            localStorage.totalMes = parseInt(localStorage.totalMes) + parseInt(localStorage.total);
            localStorage.total = 0;
            localStorage.totalLunes = 0;
            localStorage.totalMartes = 0;
            localStorage.totalMiercoles = 0;
            localStorage.totalJueves = 0;
            localStorage.totalViernes = 0;
            localStorage.totalSabado = 0;
            localStorage.totalDomingo = 0;

            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.totalLunes = 0;
            $scope.totalMartes = 0;
            $scope.totalMiercoles = 0;
            $scope.totalJueves = 0;
            $scope.totalViernes = 0;
            $scope.totalSabado = 0;
            $scope.totalDomingo = 0;

            if (isNaN(localStorage.totalSemanaAnt)) {
                localStorage.totalSemanaAnt = 0;
            }
            var i = localStorage.totalSemanaAnt;
            $scope.totalSemanaAnt = i;

            if (isNaN(localStorage.totalMes)) {
                localStorage.totalMes = 0;
            }
            var j = localStorage.totalMes;
            $scope.totalMes = j;
        }
    };

    //
    $scope.resetMonth = function () {

    { $('#confirmModal').modal('hide');
            localStorage.totalSemanaAnt = 0;
            localStorage.totalMes = 0;
            localStorage.total = 0;
            localStorage.totalLunes = 0;
            localStorage.totalMartes = 0;
            localStorage.totalMiercoles = 0;
            localStorage.totalJueves = 0;
            localStorage.totalViernes = 0;
            localStorage.totalSabado = 0;
            localStorage.totalDomingo = 0;

            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.totalLunes = 0;
            $scope.totalMartes = 0;
            $scope.totalMiercoles = 0;
            $scope.totalJueves = 0;
            $scope.totalViernes = 0;
            $scope.totalSabado = 0;
            $scope.totalDomingo = 0;

            if (isNaN(localStorage.totalSemanaAnt)) {
                localStorage.totalSemanaAnt = 0;
            }
            var i = localStorage.totalSemanaAnt;
            $scope.totalSemanaAnt = i;

            if (isNaN(localStorage.totalMes)) {
                localStorage.totalMes = 0;
            }
            var j = localStorage.totalMes;
            $scope.totalMes = j;
        }
    };
    //


    //
    $scope.guardarDatos = function()
    {
        localStorage.sueldo=$scope.sueldo;
        localStorage.ahorro = $scope.ahorro;
        var kk=$scope.ahorro/100 *$scope.sueldo;
        $scope.savings=  kk
        

        localStorage.gastoMensual = $scope.sueldo - $scope.savings - $scope.gFijos-$scope.tarjetas;
        $scope.gastoMensual = parseInt(localStorage.gastoMensual);
        localStorage.viaje = $scope.viaje;
        localStorage.gFijos = $scope.gFijos;
        localStore.tarjetas = $scope.tarjetas;

        
    }
    //
    $scope.sumLunes = function () {
        if (!isNaN($scope.lunes) && $scope.lunes > 0) {
            if (isNaN(localStorage.total)) {
                localStorage.total = 0;
            }
            if (isNaN(localStorage.totalLunes)) {
                localStorage.totalLunes = 0;
            }
            localStorage.total = parseInt(localStorage.total) + parseInt($scope.lunes);
            localStorage.totalLunes = parseInt(localStorage.totalLunes) + parseInt($scope.lunes);
            $scope.totalLunes = parseInt(localStorage.totalLunes);
            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.lunes = NaN;
        } else $scope.lunes = NaN;
    };

    $scope.sumMartes = function () {
        if (!isNaN($scope.martes) && $scope.martes > 0) {
            if (isNaN(localStorage.total)) {
                localStorage.total = 0;
            }
            if (isNaN(localStorage.totalMartes)) {
                localStorage.totalMartes = 0;
            }
            localStorage.total = parseInt(localStorage.total) + parseInt($scope.martes);
            localStorage.totalMartes = parseInt(localStorage.totalMartes) + parseInt($scope.martes);
            $scope.totalMartes = parseInt(localStorage.totalMartes);
            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.martes = NaN;
        } else $scope.martes = NaN;
    };

    $scope.sumMiercoles = function () {
        if (!isNaN($scope.miercoles) && $scope.miercoles > 0) {
            if (isNaN(localStorage.total)) {
                localStorage.total = 0;
            }
            if (isNaN(localStorage.totalMiercoles)) {
                localStorage.totalMiercoles = 0;
            }
            localStorage.total = parseInt(localStorage.total) + parseInt($scope.miercoles);
            localStorage.totalMiercoles = parseInt(localStorage.totalMiercoles) + parseInt($scope.miercoles);
            $scope.totalMiercoles = parseInt(localStorage.totalMiercoles);
            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.miercoles = NaN;
        } else $scope.miercoles = NaN;
    };

    $scope.sumJueves = function () {
        if (!isNaN($scope.jueves) && $scope.jueves > 0) {
            if (isNaN(localStorage.total)) {
                localStorage.total = 0;
            }
            if (isNaN(localStorage.totalJueves)) {
                localStorage.totalJueves = 0;
            }
            localStorage.total = parseInt(localStorage.total) + parseInt($scope.jueves);
            localStorage.totalJueves = parseInt(localStorage.totalJueves) + parseInt($scope.jueves);
            $scope.totalJueves = parseInt(localStorage.totalJueves);
            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.jueves = NaN;
        } else $scope.jueves = NaN;
    };

    $scope.sumViernes = function () {
        if (!isNaN($scope.viernes) && $scope.viernes > 0) {
            if (isNaN(localStorage.total)) {
                localStorage.total = 0;
            }
            if (isNaN(localStorage.totalViernes)) {
                localStorage.totalViernes = 0;
            }
            localStorage.total = parseInt(localStorage.total) + parseInt($scope.viernes);
            localStorage.totalViernes = parseInt(localStorage.totalViernes) + parseInt($scope.viernes);
            $scope.totalViernes = parseInt(localStorage.totalViernes);
            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.viernes = NaN;
        } else $scope.viernes = NaN;
    };

    $scope.sumSabado = function () {
        if (!isNaN($scope.sabado) && $scope.sabado > 0) {
            if (isNaN(localStorage.total)) {
                localStorage.total = 0;
            }
            if (isNaN(localStorage.totalSabado)) {
                localStorage.totalSabado = 0;
            }
            localStorage.total = parseInt(localStorage.total) + parseInt($scope.sabado);
            localStorage.totalSabado = parseInt(localStorage.totalSabado) + parseInt($scope.sabado);
            $scope.totalSabado = parseInt(localStorage.totalSabado);
            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.sabado = NaN;
        } else $scope.sabado = NaN;
    };

    $scope.sumDomingo = function () {
        if (!isNaN($scope.domingo) && $scope.domingo > 0) {
            if (isNaN(localStorage.total)) {
                localStorage.total = 0;
            }
            if (isNaN(localStorage.totalDomingo)) {
                localStorage.totalDomingo = 0;
            }
            localStorage.total = parseInt(localStorage.total) + parseInt($scope.domingo);
            localStorage.totalDomingo = parseInt(localStorage.totalDomingo) + parseInt($scope.domingo);
            $scope.totalDomingo = parseInt(localStorage.totalDomingo);
            var a = parseInt(localStorage.total);
            $scope.total = a;
            $scope.domingo = NaN;
        } else $scope.domingo = NaN;
    };

    $scope.danger = function()
    {
        if($scope.gastoMensual/4 > $scope.total)
        return false;
        else return true;
    }

    


});
