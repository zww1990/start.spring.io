/*
 * Copyright 2012-2022 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.spring.start.site.extension.dependency.observability;

import io.spring.initializr.generator.test.project.ProjectStructure;
import io.spring.initializr.web.project.ProjectRequest;
import io.spring.start.site.extension.AbstractExtensionTests;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Tests for {@link ObservabilityProjectGenerationConfiguration}.
 *
 * @author Stephane Nicoll
 */
class ObservabilityProjectGenerationConfigurationTests extends AbstractExtensionTests {

	@Test
	void zipkinAddsDistributedTracingIfNecessary() {
		assertThat(generateProject("3.0.0", "zipkin")).mavenBuild().hasDependency(getDependency("zipkin"))
				.hasDependency(getDependency("distributed-tracing"));
	}

	@Test
	void wavefrontDoesNotAddDistributedTracingByDefault() {
		assertThat(generateProject("3.0.0", "wavefront")).mavenBuild().doesNotHaveDependency("io.micrometer",
				"micrometer-tracing-reporter-wavefront");
	}

	@Test
	void wavefrontWithDistributedTracingConfigureReport() {
		assertThat(generateProject("3.0.0", "wavefront", "distributed-tracing")).mavenBuild()
				.hasDependency("io.micrometer", "micrometer-tracing-reporter-wavefront", null, "runtime");
	}

	private ProjectStructure generateProject(String bootVersion, String... dependencies) {
		ProjectRequest request = createProjectRequest(dependencies);
		request.setBootVersion(bootVersion);
		request.setType("maven-build");
		return generateProject(request);
	}

}
