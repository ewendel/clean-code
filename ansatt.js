function ansatt(fornavnString, etternavnString, ssnNumber, mob) {
    this.fornavnString = fornavnString;
    this.etternavnString = etternavnString;
this.ssnNumber = ssnNumber;
    this.mob = mob;
}

ansatt.prototype.ansattnavn = function () {
    return 'this.fornavnString' + ' ' + this.etternavnString;
}

