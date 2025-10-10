// ===== RELATÓRIOS DE TESTE DEMONSTRATIVOS =====
export const testReports = [
  {
    id: 1,
    projectName: "Sistema de E-commerce - V1.5",
    projectType: "E-commerce Platform",
    status: "Completed",
    duration: "3 meses",
    environment: "Produção",
    coverage: 92,
    testCases: {
      total: 485,
      passed: 478,
      failed: 7,
      blocked: 0
    },
    tools: ["Selenium WebDriver", "TestNG", "Maven", "Jenkins", "ExtentReports"],
    defects: [
      {
        severity: "Critical",
        description: "Checkout falha quando usuário aplica cupom de desconto específico"
      },
      {
        severity: "High",
        description: "Imagens de produtos não carregam em dispositivos móveis"
      },
      {
        severity: "Medium",
        description: "Filtro de preço não funciona com valores decimais"
      }
    ],
    qualityMetrics: {
      ddp: 98.5,
      tce: 95.2,
      defectDensity: 0.8,
      testEfficiency: 94.7
    },
    automationCoverage: 85,
    performanceMetrics: {
      loadTime: "2.3s",
      throughput: "150 req/s",
      errorRate: "0.2%"
    }
  },
  {
    id: 2,
    projectName: "Mobile Banking App - V2.0",
    projectType: "Mobile Banking",
    status: "In Progress",
    duration: "4 meses",
    environment: "Homologação",
    coverage: 88,
    testCases: {
      total: 320,
      passed: 295,
      failed: 15,
      blocked: 10
    },
    tools: ["Appium", "Java", "JUnit", "BrowserStack", "Allure Reports"],
    defects: [
      {
        severity: "High",
        description: "Transferência entre contas falha em iOS 15+"
      },
      {
        severity: "Medium",
        description: "Biometric authentication inconsistent on Android 12"
      },
      {
        severity: "Low",
        description: "UI alignment issues on tablet devices"
      }
    ],
    qualityMetrics: {
      ddp: 96.8,
      tce: 92.1,
      defectDensity: 1.2,
      testEfficiency: 89.5
    },
    automationCoverage: 78,
    performanceMetrics: {
      loadTime: "1.8s",
      throughput: "200 req/s",
      errorRate: "0.5%"
    }
  },
  {
    id: 3,
    projectName: "API Microservices - Payment Gateway",
    projectType: "API Backend",
    status: "Completed",
    duration: "2 meses",
    environment: "Produção",
    coverage: 95,
    testCases: {
      total: 215,
      passed: 212,
      failed: 3,
      blocked: 0
    },
    tools: ["RestAssured", "Postman", "Newman", "Docker", "Grafana"],
    defects: [
      {
        severity: "Critical",
        description: "Race condition in concurrent payment processing"
      },
      {
        severity: "High",
        description: "SQL injection vulnerability in transaction history endpoint"
      },
      {
        severity: "Medium",
        description: "Inconsistent error messages for invalid card numbers"
      }
    ],
    qualityMetrics: {
      ddp: 99.1,
      tce: 97.8,
      defectDensity: 0.5,
      testEfficiency: 96.3
    },
    automationCoverage: 92,
    performanceMetrics: {
      loadTime: "0.8s",
      throughput: "500 req/s",
      errorRate: "0.1%"
    }
  },
  {
    id: 4,
    projectName: "Healthcare Management System",
    projectType: "Enterprise SaaS",
    status: "Planned",
    duration: "6 meses",
    environment: "Desenvolvimento",
    coverage: 75,
    testCases: {
      total: 650,
      passed: 0,
      failed: 0,
      blocked: 0
    },
    tools: ["Cypress", "Cucumber", "Azure DevOps", "Sauce Labs", "Jira"],
    defects: [],
    qualityMetrics: {
      ddp: 0,
      tce: 0,
      defectDensity: 0,
      testEfficiency: 0
    },
    automationCoverage: 60,
    performanceMetrics: {
      loadTime: "N/A",
      throughput: "N/A",
      errorRate: "N/A"
    }
  }
];

// ===== CENÁRIOS DE TESTE DETALHADOS =====
export const testScenarios = [
  {
    id: 1,
    title: "Fluxo Completo de Checkout - E-commerce",
    type: "functional",
    objective: "Validar o processo completo de compra desde a seleção do produto até a confirmação do pedido",
    priority: "High",
    complexity: "High",
    automated: true,
    preconditions: [
      "Usuário deve estar logado no sistema",
      "Carrinho deve conter pelo menos um produto",
      "Endereço de entrega deve estar cadastrado",
      "Método de pagamento deve estar configurado"
    ],
    steps: [
      {
        step: 1,
        action: "Acessar a página do carrinho",
        expectedResult: "Sistema exibe todos os produtos adicionados com preços corretos",
        status: "passed"
      },
      {
        step: 2,
        action: "Clicar no botão 'Finalizar Compra'",
        expectedResult: "Sistema redireciona para página de checkout",
        status: "passed"
      },
      {
        step: 3,
        action: "Selecionar endereço de entrega",
        expectedResult: "Sistema calcula e exibe frete corretamente",
        status: "passed"
      },
      {
        step: 4,
        action: "Aplicar cupom de desconto 'DESC10'",
        expectedResult: "Sistema aplica 10% de desconto no valor total",
        status: "failed"
      },
      {
        step: 5,
        action: "Selecionar método de pagamento 'Cartão de Crédito'",
        expectedResult: "Sistema exibe formulário de dados do cartão",
        status: "passed"
      },
      {
        step: 6,
        action: "Preencher dados do cartão válidos",
        expectedResult: "Sistema valida dados e permite prosseguir",
        status: "passed"
      },
      {
        step: 7,
        action: "Clicar em 'Confirmar Pedido'",
        expectedResult: "Sistema processa pagamento e exibe confirmação",
        status: "passed"
      }
    ],
    automationCode: `@Test
public void testCompleteCheckoutFlow() {
    // Page Objects
    CartPage cartPage = new CartPage(driver);
    CheckoutPage checkoutPage = new CheckoutPage(driver);
    PaymentPage paymentPage = new PaymentPage(driver);
    
    // Test Steps
    cartPage.navigateToCart();
    Assert.assertTrue(cartPage.verifyCartItems());
    
    checkoutPage = cartPage.proceedToCheckout();
    checkoutPage.selectShippingAddress("Home");
    double shippingCost = checkoutPage.getShippingCost();
    Assert.assertTrue(shippingCost > 0);
    
    checkoutPage.applyCoupon("DESC10");
    double discount = checkoutPage.getDiscountAmount();
    Assert.assertEquals(discount, checkoutPage.calculateExpectedDiscount());
    
    paymentPage = checkoutPage.proceedToPayment();
    paymentPage.selectPaymentMethod("CREDIT_CARD");
    paymentPage.fillCardDetails(validCard);
    paymentPage.confirmOrder();
    
    Assert.assertTrue(paymentPage.isOrderConfirmed());
    logger.info("Checkout completed successfully");
}`
  },
  {
    id: 2,
    title: "Teste de Performance - Carga de Usuários Concorrentes",
    type: "performance",
    objective: "Avaliar o comportamento do sistema sob carga de 1000 usuários simultâneos",
    priority: "High",
    complexity: "High",
    automated: true,
    preconditions: [
      "Ambiente de teste de performance configurado",
      "Dados de teste massivos disponíveis",
      "Monitoramento ativo do servidor"
    ],
    steps: [
      {
        step: 1,
        action: "Configurar teste com 100 usuários virtuais",
        expectedResult: "Sistema aceita conexões iniciais",
        status: "passed"
      },
      {
        step: 2,
        action: "Aumentar gradualmente para 500 usuários",
        expectedResult: "Response time mantém abaixo de 2s",
        status: "passed"
      },
      {
        step: 3,
        action: "Atingir pico de 1000 usuários simultâneos",
        expectedResult: "Sistema mantém disponibilidade acima de 99%",
        status: "passed"
      },
      {
        step: 4,
        action: "Manter carga por 30 minutos",
        expectedResult: "Sem vazamento de memória ou recursos",
        status: "passed"
      },
      {
        step: 5,
        action: "Analisar métricas de performance",
        expectedResult: "Todos os KPIs dentro dos limites aceitáveis",
        status: "passed"
      }
    ],
    automationCode: `@Test
public void testConcurrentUserLoad() {
    JMeterTestPlan testPlan = new JMeterTestPlan()
        .setThreads(1000)
        .setRampUpPeriod(300)
        .setDuration(1800);
    
    testPlan.addHTTPRequest("GET", "/api/products")
           .addAssertion("Response Time", "<", 2000)
           .addAssertion("Success Rate", ">", 99);
    
    TestResults results = testPlan.run();
    
    Assert.assertTrue(results.getAverageResponseTime() < 2000);
    Assert.assertTrue(results.getErrorRate() < 1);
    Assert.assertTrue(results.getThroughput() > 50);
    
    PerformanceReport report = new PerformanceReport(results);
    report.generate();
}`
  },
  {
    id: 3,
    title: "Validação de API - Endpoint de Autenticação",
    type: "api",
    objective: "Garantir que o endpoint de autenticação funcione corretamente com diferentes cenários",
    priority: "Critical",
    complexity: "Medium",
    automated: true,
    preconditions: [
      "Serviço de autenticação rodando",
      "Usuários de teste criados",
      "Tokens de acesso válidos disponíveis"
    ],
    steps: [
      {
        step: 1,
        action: "Enviar requisição POST com credenciais válidas",
        expectedResult: "Status 200 com token JWT válido",
        status: "passed"
      },
      {
        step: 2,
        action: "Enviar requisição POST com senha inválida",
        expectedResult: "Status 401 com mensagem de erro apropriada",
        status: "passed"
      },
      {
        step: 3,
        action: "Enviar requisição POST com usuário inexistente",
        expectedResult: "Status 404 com mensagem de usuário não encontrado",
        status: "passed"
      },
      {
        step: 4,
        action: "Enviar requisição POST sem corpo",
        expectedResult: "Status 400 com mensagem de bad request",
        status: "passed"
      },
      {
        step: 5,
        action: "Validar estrutura do token JWT retornado",
        expectedResult: "Token contém claims necessárias e expiração correta",
        status: "passed"
      }
    ],
    automationCode: `@Test
public void testAuthenticationAPI() {
    // Test Case 1: Valid Credentials
    Response response = given()
        .contentType(ContentType.JSON)
        .body("{ \\"username\\": \\"testuser\\", \\"password\\": \\"validpass\\" }")
        .when()
        .post("/api/auth/login");
    
    response.then()
        .statusCode(200)
        .body("token", notNullValue())
        .body("expires_in", equalTo(3600));
    
    // Test Case 2: Invalid Password
    response = given()
        .contentType(ContentType.JSON)
        .body("{ \\"username\\": \\"testuser\\", \\"password\\": \\"wrongpass\\" }")
        .when()
        .post("/api/auth/login");
    
    response.then()
        .statusCode(401)
        .body("error", equalTo("Invalid credentials"));
    
    // Validate JWT Token Structure
    String token = response.jsonPath().getString("token");
    Claims claims = JWTUtils.decodeToken(token);
    assertNotNull(claims);
    assertEquals("testuser", claims.getSubject());
}`
  },
  {
    id: 4,
    title: "Teste de Segurança - SQL Injection Prevention",
    type: "security",
    objective: "Verificar se o sistema está protegido contra ataques de SQL Injection",
    priority: "Critical",
    complexity: "High",
    automated: true,
    preconditions: [
      "Aplicação web rodando em ambiente de teste",
      "Firewall e WAF configurados",
      "Logs de segurança ativos"
    ],
    steps: [
      {
        step: 1,
        action: "Injetar payload SQL no campo de login",
        expectedResult: "Sistema rejeita a tentativa e retorna erro genérico",
        status: "passed"
      },
      {
        step: 2,
        action: "Testar UNION-based injection no campo de busca",
        expectedResult: "Consulta retorna apenas dados autorizados",
        status: "passed"
      },
      {
        step: 3,
        action: "Tentar blind SQL injection através de cookies",
        expectedResult: "Sistema ignora manipulação de cookies maliciosos",
        status: "passed"
      },
      {
        step: 4,
        action: "Verificar logs de segurança",
        expectedResult: "Tentativas de injection são registradas adequadamente",
        status: "passed"
      },
      {
        step: 5,
        action: "Validar headers de segurança",
        expectedResult: "Headers CSP e XSS Protection presentes",
        status: "passed"
      }
    ],
    automationCode: `@Test
public void testSQLInjectionPrevention() {
    List<String> sqlPayloads = Arrays.asList(
        "' OR '1'='1",
        "'; DROP TABLE users;--",
        "' UNION SELECT * FROM passwords--",
        "' AND 1=CONVERT(int, (SELECT @@version))--"
    );
    
    for (String payload : sqlPayloads) {
        Response response = given()
            .formParam("username", payload)
            .formParam("password", "anypassword")
            .when()
            .post("/login");
        
        // Should not return database errors or sensitive information
        response.then()
            .statusCode(anyOf(is(401), is(400)))
            .body(not(containsString("SQL")))
            .body(not(containsString("database")))
            .body(not(containsString("syntax")));
        
        // Check security logs
        SecurityLog log = securityMonitor.getLatestLog();
        assertTrue(log.containsSuspiciousActivity());
    }
}`
  },
  {
    id: 5,
    title: "Teste de Usabilidade - Fluxo Mobile First",
    type: "functional",
    objective: "Garantir experiência otimizada para dispositivos móveis",
    priority: "Medium",
    complexity: "Medium",
    automated: false,
    preconditions: [
      "Dispositivos móveis de teste disponíveis",
      "Emuladores/configurados",
      "Network throttling ativo"
    ],
    steps: [
      {
        step: 1,
        action: "Acessar aplicação em smartphone",
        expectedResult: "Layout responsivo carrega corretamente",
        status: "passed"
      },
      {
        step: 2,
        action: "Navegar pelo menu hamburger",
        expectedResult: "Menu expande/retrai suavemente",
        status: "passed"
      },
      {
        step: 3,
        action: "Realizar busca através da barra de pesquisa",
        expectedResult: "Teclado virtual aparece e funciona corretamente",
        status: "passed"
      },
      {
        step: 4,
        action: "Testar gestos de swipe e tap",
        expectedResult: "Interações touch respondem adequadamente",
        status: "passed"
      },
      {
        step: 5,
        action: "Verificar performance em 3G",
        expectedResult: "Tempo de carregamento aceitável em rede lenta",
        status: "not-executed"
      }
    ],
    automationCode: null
  }
];

// ===== MÉTRICAS DE QUALIDADE E KPIs =====
export const qualityMetrics = {
  overall: {
    ddp: 98.2, // Defect Detection Percentage
    testEfficiency: 94.5,
    defectDensity: 0.8,
    defectLeakage: 1.2,
    testCoverage: 91.7,
    automationRate: 82.3
  },
  byType: [
    {
      type: "Functional",
      coverage: 95,
      passRate: 97.8,
      defectsFound: 45,
      automation: 88,
      trend: "improving"
    },
    {
      type: "API",
      coverage: 92,
      passRate: 99.1,
      defectsFound: 12,
      automation: 95,
      trend: "stable"
    },
    {
      type: "Performance",
      coverage: 85,
      passRate: 94.2,
      defectsFound: 8,
      automation: 75,
      trend: "improving"
    },
    {
      type: "Security",
      coverage: 88,
      passRate: 96.5,
      defectsFound: 15,
      automation: 70,
      trend: "stable"
    },
    {
      type: "Mobile",
      coverage: 90,
      passRate: 95.8,
      defectsFound: 22,
      automation: 80,
      trend: "improving"
    }
  ],
  defectEvolution: [
    {
      month: "Jan",
      defects: { critical: 5, high: 12, medium: 18, low: 25 },
      testCases: { total: 1200, executed: 1150, passed: 1120 }
    },
    {
      month: "Fev",
      defects: { critical: 3, high: 8, medium: 15, low: 20 },
      testCases: { total: 1350, executed: 1300, passed: 1275 }
    },
    {
      month: "Mar",
      defects: { critical: 2, high: 6, medium: 12, low: 18 },
      testCases: { total: 1500, executed: 1450, passed: 1425 }
    },
    {
      month: "Abr",
      defects: { critical: 1, high: 4, medium: 10, low: 15 },
      testCases: { total: 1650, executed: 1600, passed: 1580 }
    },
    {
      month: "Mai",
      defects: { critical: 0, high: 3, medium: 8, low: 12 },
      testCases: { total: 1800, executed: 1750, passed: 1735 }
    },
    {
      month: "Jun",
      defects: { critical: 1, high: 2, medium: 6, low: 10 },
      testCases: { total: 1950, executed: 1900, passed: 1885 }
    }
  ],
  rootCauseAnalysis: [
    {
      type: "Requirements Gaps",
      percentage: 35,
      examples: [
        "Funcionalidades não especificadas",
        "Cenários de borda não considerados",
        "Regras de negócio ambíguas"
      ]
    },
    {
      type: "Coding Errors",
      percentage: 25,
      examples: [
        "Validações de entrada insuficientes",
        "Tratamento de exceções inadequado",
        "Condições de corrida"
      ]
    },
    {
      type: "Integration Issues",
      percentage: 20,
      examples: [
        "Incompatibilidade entre microservices",
        "Problemas de comunicação API",
        "Configurações de ambiente"
      ]
    },
    {
      type: "Data Related",
      percentage: 12,
      examples: [
        "Problemas de migração de dados",
        "Inconsistências no banco",
        "Cache inválido"
      ]
    },
    {
      type: "Environment/Infra",
      percentage: 8,
      examples: [
        "Problemas de rede",
        "Configuração de servidor",
        "Recursos insuficientes"
      ]
    }
  ]
};

// ===== DADOS PARA DASHBOARD E ESTATÍSTICAS =====
export const dashboardData = {
  currentSprint: {
    name: "Sprint 24",
    startDate: "2024-01-15",
    endDate: "2024-01-29",
    metrics: {
      plannedTests: 150,
      executedTests: 142,
      passedTests: 138,
      failedTests: 4,
      automationProgress: 78
    }
  },
  testTrends: {
    weeklyExecution: [120, 135, 110, 145, 130, 125, 140],
    defectTrend: [15, 12, 8, 10, 7, 5, 4],
    coverageTrend: [85, 87, 89, 88, 90, 91, 92]
  },
  teamPerformance: {
    members: [
      { name: "Ana Silva", testsExecuted: 45, defectsFound: 12, automation: 35 },
      { name: "Carlos Santos", testsExecuted: 38, defectsFound: 8, automation: 28 },
      { name: "Marina Oliveira", testsExecuted: 42, defectsFound: 15, automation: 40 },
      { name: "Pedro Costa", testsExecuted: 35, defectsFound: 6, automation: 32 }
    ],
    averageMetrics: {
      testsPerMember: 40,
      defectsPerMember: 10.25,
      automationPerMember: 33.75
    }
  }
};

// ===== FERRAMENTAS E TECNOLOGIAS =====
export const qaTools = {
  automation: [
    { name: "Selenium WebDriver", proficiency: "Expert", years: 6 },
    { name: "Cypress", proficiency: "Advanced", years: 3 },
    { name: "Playwright", proficiency: "Advanced", years: 2 },
    { name: "Appium", proficiency: "Advanced", years: 4 },
    { name: "RestAssured", proficiency: "Expert", years: 5 }
  ],
  performance: [
    { name: "JMeter", proficiency: "Advanced", years: 5 },
    { name: "Gatling", proficiency: "Intermediate", years: 2 },
    { name: "LoadRunner", proficiency: "Intermediate", years: 3 }
  ],
  languages: [
    { name: "Java", proficiency: "Expert", years: 8 },
    { name: "JavaScript", proficiency: "Advanced", years: 5 },
    { name: "Python", proficiency: "Intermediate", years: 3 },
    { name: "SQL", proficiency: "Advanced", years: 6 }
  ],
  frameworks: [
    { name: "TestNG", proficiency: "Expert", years: 6 },
    { name: "JUnit", proficiency: "Advanced", years: 5 },
    { name: "Cucumber BDD", proficiency: "Advanced", years: 4 },
    { name: "Jest", proficiency: "Intermediate", years: 2 }
  ],
  cicd: [
    { name: "Jenkins", proficiency: "Advanced", years: 5 },
    { name: "GitLab CI", proficiency: "Advanced", years: 3 },
    { name: "Azure DevOps", proficiency: "Intermediate", years: 2 },
    { name: "Docker", proficiency: "Advanced", years: 4 }
  ]
};

export default {
  testReports,
  testScenarios,
  qualityMetrics,
  dashboardData,
  qaTools
};