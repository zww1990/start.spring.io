/*
 * Copyright 2012-2023 the original author or authors.
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

package io.spring.start.site.extension.dependency.springboot;

import io.spring.initializr.generator.buildsystem.gradle.GradleBuild;

/**
 * {@link PaketoBuilderBuildCustomizer} for Gradle with the Kotlin DSL.
 *
 * @author Stephane Nicoll
 */
class PaketoBuilderKotlinDslGradleBuildCustomizer extends PaketoBuilderBuildCustomizer<GradleBuild> {

	@Override
	protected void customize(GradleBuild build, String imageBuilder) {
		build.tasks().customize("bootBuildImage", (task) -> task.invoke("builder.set", "\"" + imageBuilder + "\""));
	}

}
