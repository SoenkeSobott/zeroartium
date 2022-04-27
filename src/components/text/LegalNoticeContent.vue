<template>
  <div>
    <a href="/">
      <h1 class="name-link">ZeroArtium</h1>
    </a>
    <h2 class="title-terms">{{ $t("message.legalNotice") }}</h2>
    <h3>{{ $t("message.paragraph5TMG") }}</h3>
    <p>
      ZeroArtium UG (haftungsbeschränkt)<br />
      Tüllinger Straße 86<br />
      79539 Lörrach<br />
      Deutschland<br />
      <br />
      {{ $t("message.phone") }}: 01727456094<br />
      E-Mail: <a href="mailto:contact@zeroartium.com">contact@zeroartium.com</a
      ><br />
      <a href="/">www.zeroartium.com</a><br />
      <br />
      {{ $t("message.commercialRegister") }}: Amtsgericht Freiburg<br />
      {{ $t("message.commercialRegisterNumber") }}: HRB 725069<br />
      <!--Umsatzsteuer-Identifikationsnummer: XXX<br/> NOT Present at the moment-->
      {{ $t("message.foundationDate") }}: 23.09.2021<br />
      {{ $t("message.managingDirector") }}: Daniel Heimann, Maxim Bode, Sönke Sobott<br />
    </p>
    <h3>{{ $t("message.dataProtectionOfficer") }}</h3>
    <dsgvo-text></dsgvo-text>
    <h3>
      {{ $t("message.consumerDisputeResolution") }}
    </h3>
    <p>
      {{ $t("message.consumerDisputeResolutionText") }}
    </p>
    <!-- Used librarys and co -->
    <h3>{{ $t("message.thirdPartyProducts") }}</h3>
    <third-party-content></third-party-content>
  </div>
</template>