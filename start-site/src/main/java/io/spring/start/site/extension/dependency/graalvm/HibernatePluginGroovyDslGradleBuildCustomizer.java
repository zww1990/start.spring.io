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

package io.spring.start.site.extension.dependency.graalvm;

import io.spring.initializr.generator.buildsystem.gradle.GradleBuild;
import io.spring.initializr.generator.spring.build.BuildCustomizer;
import io.spring.initializr.generator.version.VersionReference;

/**
 * A {@link BuildCustomizer} for projects using the Groovy DSL with GraalVm and Hibernate.
 *
 * @author Stephane Nicoll
 */
class HibernatePluginGroovyDslGradleBuildCustomizer implements BuildCustomizer<GradleBuild> {

	private final VersionReference hibernateVersion;

	HibernatePluginGroovyDslGradleBuildCustomizer(VersionReference hibernateVersion) {
		this.hibernateVersion = hibernateVersion;
	}

	@Override
	public void customize(GradleBuild build) {
		build.plugins().add("org.hibernate.orm", (plugin) -> plugin.setVersion(this.hibernateVersion.toString()));
		build.snippets().add((writer) -> {
			writer.println("hibernate {");
			writer.indented(() -> {
				writer.println("enhancement {");
				writer.indented(() -> {
					writer.println("lazyInitialization true");
					writer.println("dirtyTracking true");
					writer.println("associationManagement true");
				});
				writer.println("}");
			});
			writer.println("}");
		});
	}

}
